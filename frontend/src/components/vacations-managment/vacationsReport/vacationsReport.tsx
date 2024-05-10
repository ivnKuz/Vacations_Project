import { useEffect, useState } from "react";
import "./vacationsReport.css";
import Vacation from "../../../models/Vacation";
import VacationsService from "../../../services/Vacations";
import vacationsCharts from "../../../models/vacationsChart";
import notify from "../../../services/Notify";
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import followerCount from "../../../models/followerCount";
function VacationsReport(): JSX.Element {
    const [vacations, setVacations] = useState<Vacation[]>([]);
    const [followersCount, setFollowersCount] = useState<followerCount[]>([]);
    const [chartsVacationsData, setChartsVacationsData] = useState<vacationsCharts[]>([])
    // const data = setVacationsChartObject();
    useEffect(()=> {
        Promise.all([
            VacationsService.getAll(),
            VacationsService.getFollowerCount()
        ]).then(results => {
            setVacations(results[0]);
            setFollowersCount(results[1]);
        }).catch(e=> notify.error(e));
    }, []);
    
    useEffect(() => {
        setVacationsChartObject().then(filteredVacationsData => {
            setChartsVacationsData(filteredVacationsData as vacationsCharts[]);
        });
    }, [vacations, followersCount]);
    
    async function setVacationsChartObject() {
        const filteredVacations = await Promise.all(followersCount.map(async ({ id, followers }) => {
            // Find the vacation object with the corresponding id
            const vacation = vacations.find(vacation => vacation.id === id);
            // If vacation is found, return an object with destination and followers
            if (vacation) {
                return { destination: vacation.destination, followers };
            }
            // If no matching vacation found, return undefined
            return undefined;
        }));
        // Filter out undefined values (vacations with no matching id)
        return filteredVacations.filter(vacation => vacation !== undefined);
    }
    


     
    return (
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={300}
          height={300}
          data={chartsVacationsData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="destination" interval={0} stroke="#8884d8" tick={{ fontSize: 10 }} />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
         
          <Bar dataKey="followers" fill="#ba2cc9" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
    );
        }

export default VacationsReport;
