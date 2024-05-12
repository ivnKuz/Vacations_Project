import axios from "axios";
import followerCount from "../models/followerCount";
import appConfig from "../utils/AppConfig";
import VacationModel from "../models/Vacation";
import follower from "../models/follower";
import vacationsCharts from "../models/vacationsChart";

class Vacations {

    public async getAll(): Promise<VacationModel[]> {

        const response = await axios.get<VacationModel[]>(appConfig.VacationsUrl);

        const vacations = response.data;

        return vacations;
    }

    public async getReportsData(): Promise<vacationsCharts[]> {

        const response = await axios.get<vacationsCharts[]>(appConfig.getChartReport);

        const reportChart = response.data;

        return reportChart;
    }


    public async getVacationsCSV(): Promise<void> {
       
            try {
                // Setting the response type to blob
              const response = await axios.get(appConfig.getVacationsCSV, {
                responseType: 'blob', 
              });
              
              // Create a URL for the blob data
              const url = window.URL.createObjectURL(new Blob([response.data]));
              
              // Create a link element
              const link = document.createElement('a');
              link.href = url;
              
              // Set the download attribute with the desired file name
              link.setAttribute('download', 'vacations.csv');
              
              // Append the link to the body and trigger the download
              document.body.appendChild(link);
              link.click();
              
              // Cleanup
              document.body.removeChild(link);
            } catch (error) {
              console.error('Error downloading CSV:', error);
            }
          

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