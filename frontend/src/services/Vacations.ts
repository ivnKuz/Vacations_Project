import axios from "axios";
import followerCount from "../models/followerCount";
import appConfig from "../utils/AppConfig";
import VocationModel from "../models/Vacation";
import follower from "../models/follower";

class Vacations {

    public async getAll(): Promise<VocationModel[]> {

        const response = await axios.get<VocationModel[]>(appConfig.getAllVacationsUrl);

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

    public async addFollower(follower: follower | undefined): Promise<follower> {

        const response = await axios.post<follower>(appConfig.FollowUrl, follower);

        const addedFollower = response.data;

        return addedFollower;
    }
    public async deleteFollow(id: number | undefined, userId: string | undefined): Promise<void>{
        await axios.delete( `${appConfig.FollowUrl}/${id}${userId}`);
    }
    


}

// singleton
const vacations = new Vacations();
export default vacations;