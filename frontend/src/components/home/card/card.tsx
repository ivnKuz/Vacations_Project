import "./card.css";
import pool from "../../../assets/images/pool.jpg"
import Vocation from "../../../models/Vocation";
import dayjs from "dayjs";
import User from "../../../models/User";
import VocationsService from "../../../services/Vocations";
import follower from "../../../models/follower";
import { useEffect, useState } from "react";
import followerCount from "../../../models/followerCount";
import Card__like_btn from "../card__like_btn/card__like_btn";
interface vacationCardProps {
    vocation: Vocation;
    user: User | undefined;
    follows: follower[];
    vocationFollowers: followerCount;
    // setFollows: React.Dispatch<React.SetStateAction<follower[]>>;
}
function Card(props:vacationCardProps): JSX.Element {
  
    
    
    
    return (
        <div className="card-container">
       
			<div className="image-container">
                {/* MAKE LIKE BUTTON A DIFFERENT COMPONENT, cuz gotta switch between roles */}
                <Card__like_btn vocation={props.vocation} user={props.user} follows={props.follows} vocationFollowers={props.vocationFollowers}/>
                
                <h3 className="card-title">{props.vocation.destination}</h3>
                <img className="card-img" src={pool} alt="" />
            </div>
            
            <div className="card-body">
                <div className="first-layer">
                     {dayjs(props.vocation.startDate?.toString()).format('DD.MM.YYYY')} - {dayjs(props.vocation.endDate?.toString()).format('DD.MM.YYYY')}
                 </div>
                <div className="second-layer">
                {props.vocation.description}
                 </div>
                 <div className="btn-container">
                <button  className="price-btn">
                    <p>{props.vocation.price}</p>
                </button>
            </div>
            </div>
            
        </div>
    );
}

export default Card;
