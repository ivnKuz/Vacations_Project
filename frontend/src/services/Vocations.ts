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

    public async addFollower(follower: User): Promise<follower> {

        const response = await axios.post<follower>(appConfig.addFollowUrl, follower);

        const addedFollower = response.data;

        return addedFollower;
    }


}

// singleton
const vacations = new Vacations();
export default vacations;