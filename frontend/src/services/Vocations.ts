import axios from "axios";
import LoremIpsumModel from "../models/SignUp";
import appConfig from "../utils/AppConfig";
import VacationModel from "../models/vacation";
import User from "../models/User";
import follower from "../models/follower";

class Vacations {

    public async getAll(): Promise<VacationModel[]> {

        const response = await axios.get<VacationModel[]>(appConfig.getAllVacationsUrl);

        const vacations = response.data;

        return vacations;
    }
    public async getAllFollowers(): Promise<follower[]> {

        const response = await axios.get<follower[]>(appConfig.getAllFollowers);

        const followers = response.data;

        return followers;
    }

    public async addFollower(follower: follower | undefined): Promise<follower> {

        const response = await axios.post<follower>(appConfig.FollowUrl, follower);

        const addedFollower = response.data;

        return addedFollower;
    }
    public async deleteFollow(id: number | undefined): Promise<void>{
        await axios.delete( `${appConfig.FollowUrl}/${id}`);
    }
    


}

// singleton
const vacations = new Vacations();
export default vacations;