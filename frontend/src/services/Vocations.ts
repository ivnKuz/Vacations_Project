import axios from "axios";
import LoremIpsumModel from "../models/SignUp";
import appConfig from "../utils/AppConfig";
import VacationModel from "../models/vacation";

class Vacations {

    public async getAll(): Promise<VacationModel[]> {

        const response = await axios.get<VacationModel[]>(appConfig.getAllVacationsUrl);

        const vacations = response.data;

        return vacations;
    }

    // public async add(loremIpsum: VacationModel): Promise<VacationModel> {

    //     const response = await axios.post<VacationModel>(appConfig.loremIpsumUrl, loremIpsum);

    //     const addedLoremIpsum = response.data;

    //     return addedLoremIpsum;
    // }


}

// singleton
const vacations = new Vacations();
export default vacations;