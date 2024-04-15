import { NextFunction, Request, Response } from "express";
import getModel from "../../models/vacations/factory";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import config from 'config';
import createHttpError, { Unauthorized } from "http-errors";

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // throw new Error('custom error')
        const vacations = await getModel().getAll();
        // res.json(products.map(p => convertProductToImageUrl(p)));
        res.json(vacations); // same as ^
    } catch (err) {
        next(err);
    }
    
}
export const userFollowed  = async (req: Request, res: Response, next: NextFunction) => { 
   
    try {
        const followers = await getModel().userFollowed(req.body);
        res.json(followers)
    } catch (err) {
        next(err);
    }
}

export const deleteFollow = async (req: Request, res: Response, next: NextFunction) => {
    try {
       const isDeleted = await getModel().deleteFollow(+req.params.id)
       if(!isDeleted) return next(); 
        res.sendStatus(StatusCodes.NO_CONTENT)
    } catch (err) {
        next(err)
    }
}