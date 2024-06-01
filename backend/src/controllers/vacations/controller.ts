import { NextFunction, Request, Response } from "express";
import getModel from "../../models/vacations/factory";
import { StatusCodes } from "http-status-codes";
import config from 'config';
import vacationDTO from "../../models/vacations/dto";
import { json2csv } from 'json-2-csv';

//converting image url in db to local path to image in backend assets folder or whenever config is pointing.
function convertVacationImageToImageUrl(vacation: vacationDTO) {
    const vacationWithImageUrl = {
        ...vacation,
        price: Number(vacation.price),
        imageUrl: `${config.get<string>('app.protocol')}://${config.get<string>('app.host')}:${config.get<number>('app.port')}/images/${vacation.imageName}`
    }
    delete vacationWithImageUrl.imageName;
    
    return vacationWithImageUrl;
    }


export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const vacations = await getModel().getAll();
        res.json(vacations.map(convertVacationImageToImageUrl)); 
    } catch (err) {
        next(err);
    }
    
}

//paginated vacations, takes in page number and page size from front end, and only loads the requested amount of vacations.
export const getPaginatedVacations = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const vacations = await getModel().getPaginatedVacations(+req.params.pageNumber, +req.params.pageSize);
        res.json(vacations.map(convertVacationImageToImageUrl)); 
    } catch (err) {
        next(err);
    }
    
}
//________FILTERS WITH PAGINATION_______
export const filterByFollow = async (req: Request, res: Response, next: NextFunction) => {
    try {
    const filteredVacations = await getModel().filterByFollow(req.params.userId, +req.params.pageNumber, +req.params.pageSize)
    res.json(filteredVacations.map(convertVacationImageToImageUrl));
    }catch(err){
        next(err)
    }
}
export const filterByAvailable = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const availableVacations = await getModel().filterByAvailable(+req.params.pageNumber, +req.params.pageSize);
        res.json(availableVacations.map(convertVacationImageToImageUrl)); 
    } catch (err) {
        next(err);
    }
    
}
export const filterByActive= async (req: Request, res: Response, next: NextFunction) => {
    try {
        const activeVacations = await getModel().filterByActive(+req.params.pageNumber, +req.params.pageSize);
        res.json(activeVacations.map(convertVacationImageToImageUrl)); 
    } catch (err) {
        next(err);
    }
    
}
//________________

//csv file download request
export const getVacationsCSV = async (req: Request, res: Response, next: NextFunction) => {
    try {
        //have to map over this csv because I have an id there, so I can show duplicate names in csv file
        const vacationsCsv = await getModel().getVacationsCSV();
        const mappedVacationsData = vacationsCsv.map(({destination, followers}) => ({destination, followers}));
        res.setHeader('Content-type', 'text/csv')
        res.setHeader('Content-Disposition','attachment;filename=vacations.csv')
        const convertToCsv = await json2csv(mappedVacationsData, {});
        res.send(convertToCsv)
    } catch (err) {
        next(err);
    }
    
}
//using same csv sql request for charts because it's similar, returns vacation destination name and amount of followers.
export const getDataForCharts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        //same in here, have to cut id out, because i dont need it
        const chartsData = await getModel().getVacationsCSV();
        const mappedchartsData = chartsData.map(({destination, followers}) => ({destination, followers}))
        res.send(mappedchartsData)
    } catch (err) {
        next(err);
    }
    
}
//returns Followers table
export const getAllFollowers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const followerss = await getModel().getAllFollowers();
        res.json(followerss); 
    } catch (err) {
        next(err);
    }
    
}
//adding to followers table when pressed on like button
export const userFollowed  = async (req: Request, res: Response, next: NextFunction) => { 
    try {
        const followers = await getModel().userFollowed(req.body);
        res.json(followers)
    } catch (err) {
        next(err);
    }
}
//returns the vacation id and amount of followers this vacation has
export const getFollowersCount  = async (req: Request, res: Response, next: NextFunction) => { 
   
    try {
        const followerCount = await getModel().getFollowersCount();
        res.json(followerCount)
    } catch (err) {
        next(err);
    }
}
//returns one vacation by id, needed for edit to put in params etc
export const getOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const vacation = await getModel().getOne(+req.params.id);
        if (!vacation) return next();
        res.json(convertVacationImageToImageUrl(vacation));
    } catch (err) {
        next(err)
    }
}
//add new vacation
export const add = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const vacation = await getModel().add(req.body);
        res.status(StatusCodes.CREATED).json(convertVacationImageToImageUrl(vacation));
    } catch (err) {
        next(err)
    }
}
//edit existing vacation
export const edit = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = +req.params.id;
        const existingVacation = await getModel().getOne(id);
        const updatedVacation = {...existingVacation, ...req.body};
        const vacation = await getModel().update(updatedVacation);
        res.json(convertVacationImageToImageUrl(vacation));
    } catch (err) {
        next(err)
    }
}
//dete follow by passing in current userId and vacationId
export const deleteFollow = async (req: Request, res: Response, next: NextFunction) => {
    try {
       const isDeleted = await getModel().deleteFollow(+req.params.id, req.params.userId)
       if(!isDeleted) return next(); 
        res.sendStatus(StatusCodes.NO_CONTENT)
    } catch (err) {
        next(err)
    }
}
export const deleteVacation = async (req: Request, res: Response, next: NextFunction) => {
    try {
       const isDeleted = await getModel().deleteVacation(+req.params.id)
       if(!isDeleted) return next(); 
        res.sendStatus(StatusCodes.NO_CONTENT)
    } catch (err) {
        next(err)
    }
}