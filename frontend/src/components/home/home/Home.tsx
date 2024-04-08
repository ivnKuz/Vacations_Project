import { useNavigation } from "react-router-dom";
import { authStore } from "../../../redux/authState";
import vacationsService from "../../../services/Vocations";
import "./Home.css";
// if you have an image to display, this is how you would import it
// import Products2ImageSource from '../../../assets/images/products2.jpg';
import { useEffect, useState } from "react";
import Card from "../card/card";
import Vacation from "../../../models/vacation";

function Home(): JSX.Element {
    const [vacations, setVacations] = useState<Vacation[]>([]);
    useEffect(()=>{
        vacationsService.getAll().then(serverVacations => setVacations(serverVacations)).catch();
    },[]);
    return (
        <div className="Home">
               {vacations.sort((a,b) => {
            let firstDate = a.startDate as unknown as Date;
            let secondDate = b.startDate as unknown as Date;
            return firstDate > secondDate ?  1 :  -1;
        }).map((vacation, indx) => <Card key={indx} vacation={vacation}/>)}
               
        </div>
    );
    }

export default Home;
