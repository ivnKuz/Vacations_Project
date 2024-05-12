import { useEffect, useState } from "react";
import "./vacationsReport.css";
import VacationsService from "../../../services/Vacations";
import vacationsCharts from "../../../models/vacationsChart";
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
function VacationsReport(): JSX.Element {
    const [chartsVacationsData, setChartsVacationsData] = useState<vacationsCharts[]>([])
    //getting the data for charts then just applying it on recharts provided by recharts
    useEffect(()=> {
       VacationsService.getReportsData().then(setChartsVacationsData)
    }, []);
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
