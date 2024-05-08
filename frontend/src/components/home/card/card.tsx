import "./card.css";
import pool from "../../../assets/images/pool.jpg"
import Vacation from "../../../models/Vacation";
import dayjs from "dayjs";
import User from "../../../models/User";
// import VocationsService from "../../../services/Vocations";
import follower from "../../../models/follower";
import { useEffect, useState } from "react";
import followerCount from "../../../models/followerCount";
import Card_like_btn from "../card_like_btn/card_like_btn";
import Card_admin_btns from "../card_admin_btns/card_admin_btns";
interface vacationCardProps {
    vacation: Vacation;
    user: User | undefined;
    follows: follower[];
    vacationFollowers: followerCount;
    currentUserFollows:boolean;
    getData: () => void;
    // setFollows: React.Dispatch<React.SetStateAction<follower[]>>;
}
function Card(props:vacationCardProps): JSX.Element {
  
    console.log(props.user?.roleId);
    

    
    return (
        <div className="card-container">
       
			<div className="image-container">
                {/* MAKE LIKE BUTTON A DIFFERENT COMPONENT, cuz gotta switch between roles */}
               {props.user?.roleId === 1 ? <Card_like_btn key={props.vacationFollowers.followers} currentUserFollows={props.currentUserFollows} vacation={props.vacation} user={props.user} follows={props.follows} vacationFollowers={props.vacationFollowers}/> : null }
               {props.user?.roleId === 2 ? <Card_admin_btns vacation={props.vacation} getData={props.getData}/> : null}
                
                <h3 className="card-title">{props.vacation.destination}</h3>
                <img className="card-img" src={props.vacation.imageUrl} alt="" />
            </div>
            
            <div className="card-body">
                <div className="first-layer">
                     {dayjs(props.vacation.startDate?.toString()).format('DD.MM.YYYY')} - {dayjs(props.vacation.endDate?.toString()).format('DD.MM.YYYY')}
                 </div>
                <div className="second-layer">
                {props.vacation.description}
                 </div>
                 <div className="btn-container">
                <button  className="price-btn">
                    <p>{props.vacation.price}</p>
                </button>
            </div>
            </div>
            
        </div>
    );
}

export default Card;
