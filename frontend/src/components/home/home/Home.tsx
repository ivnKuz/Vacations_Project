import { useNavigation } from "react-router-dom";
import { authStore } from "../../../redux/authState";
import VocationsService from "../../../services/Vocations";
import followerCount from "../../../models/followerCount";
import "./Home.css";
// if you have an image to display, this is how you would import it
// import Products2ImageSource from '../../../assets/images/products2.jpg';
import { useEffect, useState } from "react";
import Card from "../card/card";
import Vocation from "../../../models/Vocation";
import User from "../../../models/User";
import { jwtDecode } from "jwt-decode";
import follower from "../../../models/follower";

function Home(): JSX.Element {
    
    const token = authStore.getState().token;
    const [user, setUser] = useState<User>();
    const [vocations, setVocations] = useState<Vocation[]>([]);
    const [follows, setFollows] = useState<follower[]>([]);
    const [followerCount, setFollowerCount] = useState<followerCount[]>([]);
    
    useEffect(()=>{
        Promise.all([
            VocationsService.getAllFollowers(),
            VocationsService.getAll(),
            VocationsService.getFollowerCount()
        ]).then(results => {
            setFollows(results[0]);
            setVocations(results[1]);
            setFollowerCount(results[2]);
        }).catch()
        if(token){
            const user = jwtDecode<{user: User}>(token).user;
            setUser(user)
         }
    },[]);

    

    console.log(followerCount);
    return (
        <div className="Home">
               {vocations.sort((a,b) => {
            let firstDate = a.startDate as unknown as Date;
            let secondDate = b.startDate as unknown as Date;
            return firstDate > secondDate ?  1 :  -1;
        }).map((vacation, indx) => <Card key={indx} vocationFollowers={followerCount.filter(vocation => vocation.id === vacation.id)[0]} follows={follows}  vacation={vacation} user={user}/>
        )}  
        </div>
    );
    }

export default Home;
