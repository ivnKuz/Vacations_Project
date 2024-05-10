import axios from "axios";
import followerCount from "../models/followerCount";
import appConfig from "../utils/AppConfig";
import VacationModel from "../models/Vacation";
import follower from "../models/follower";

class Vacations {

    public async getAll(): Promise<VacationModel[]> {

        const response = await axios.get<VacationModel[]>(appConfig.VacationsUrl);

        const vacations = response.data;

        return vacations;
    }
    public async getAllFollowers(): Promise<follower[]> {

        const response = await axios.get<follower[]>(appConfig.getAllFollowers);

        const followers = response.data;

        return followers;
    }
    public async getFollowerCount(): Promise<followerCount[]> {

        const response = await axios.get<followerCount[]>(appConfig.getFollowersCount);

        const followersCount = response.data;

        return followersCount;
    }

    public async getOne(id: number): Promise<VacationModel | undefined>{
            const vacations = await this.getAll();
             const vacation = vacations.find(v => v.id === id);
        return vacation;
    }

    public async addVacation(vacation: VacationModel): Promise<VacationModel>{
        //need to do it to send image
        const options = {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        }

        const response = await axios.post<VacationModel>(appConfig.VacationsUrl, vacation, options);
        const addedVacation = response.data;

        return addedVacation;
    }

    public async addFollower(follower: follower | undefined): Promise<follower> {

        const response = await axios.post<follower>(appConfig.FollowUrl, follower);

        const addedFollower = response.data;

        return addedFollower;
    }
    public async editVacation(vacation: VacationModel): Promise<VacationModel>{
        //need to do it to send image
        const options = {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        }
        const response = await axios.patch<VacationModel>(appConfig.VacationsUrl + `/${vacation.id}`, vacation, options);
        const updatedVAcation = response.data;
       
        return updatedVAcation;
    }


    public async deleteFollow(id: number | undefined, userId: string | undefined): Promise<void>{
        await axios.delete( `${appConfig.FollowUrl}/${id}/${userId}`);
    }
    public async deleteVacation(id: number | undefined): Promise<void>{
        await axios.delete( `${appConfig.deleteVacation}/${id}`);
    }


}

// singleton
const vacations = new Vacations();
export default vacations;