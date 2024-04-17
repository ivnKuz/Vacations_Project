import { useNavigation } from "react-router-dom";
import { authStore } from "../../../redux/authState";
import vacationsService from "../../../services/Vocations";
import "./Home.css";
// if you have an image to display, this is how you would import it
// import Products2ImageSource from '../../../assets/images/products2.jpg';
import { useEffect, useState } from "react";
import Card from "../card/card";
import Vacation from "../../../models/vacation";
import User from "../../../models/User";
import { jwtDecode } from "jwt-decode";
import follower from "../../../models/follower";

function Home(): JSX.Element {
    
    const token = authStore.getState().token;
    const [user, setUser] = useState<User>();
    const [vacations, setVacations] = useState<Vacation[]>([]);
    const [follows, setFollows] = useState<follower[]>([]);
    const [followers, setFollowers] = useState<follower[]>([]);
    
    useEffect(()=>{
        vacationsService.getAllFollowers().then(data => setFollows(data))
        vacationsService.getAll().then(serverVacations => setVacations(serverVacations)).catch();
        if(token){
            const user = jwtDecode<{user: User}>(token).user;
            setUser(user)
         }
         
    },[]);
    
    return (
        <div className="Home">
               {vacations.sort((a,b) => {
            let firstDate = a.startDate as unknown as Date;
            let secondDate = b.startDate as unknown as Date;
            return firstDate > secondDate ?  1 :  -1;
        }).map((vacation, indx) => <Card key={indx} follows={follows}  vacation={vacation} user={user}/>)}
               
        </div>
    );
    }

export default Home;
