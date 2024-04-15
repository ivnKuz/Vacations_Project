import "./card.css";
import pool from "../../../assets/images/pool.jpg"
import { NavLink } from "react-router-dom";
import Vacation from "../../../models/vacation";
import dayjs from "dayjs";
import User from "../../../models/User";
import follower from "../../../models/follower";
import { useEffect, useState } from "react";
import vacations from "../../../services/Vocations";
interface vacationCardProps {
    vacation: Vacation;
    user: User | undefined;
}
function Card(props:vacationCardProps): JSX.Element {
    const [follower, setFollower] = useState<follower>();
    const [followed, setFollowed] = useState<boolean>(false);
    const newFollower = {
        userId: props.user?.id, vocationId: props.vacation?.id
    }
    //maybe make getFollowers and if vocationId for this userId is there set followed to true
    useEffect(()=>{
        setFollower(newFollower)
    },[])
    function follow(){
        setFollowed(followed ? false : true);
        if(!followed) vacations.addFollower(follower);
        if(followed) vacations.deleteFollow(follower?.vocationId)
        
    }
    
    console.log(followed);
    
    return (
        <div className="card-container">
       
			<div className="image-container">
                <button onClick={follow} className={followed ? "btn-like--pressed" : "btn-like"}><span className="btn-heart"></span> Like</button>
                <h3 className="card-title">{props.vacation.destination}</h3>
                <img className="card-img" src={pool} alt="" />
            </div>
            
            <div className="card-body">
                <div className="first-layer">
                     {dayjs(props.vacation.startDate?.toString()).format('YYYY MM-DD')} - {dayjs(props.vacation.endDate?.toString()).format('YYYY MM-DD')}
                 </div>
                <div className="second-layer">
                {props.vacation.description}
                 </div>
                 <div className="btn-container">
                <button  className="price-btn">
                    <NavLink to={''}>view more</NavLink>
                </button>
            </div>
            </div>
            
        </div>
    );
}

export default Card;
