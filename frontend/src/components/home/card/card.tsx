import "./card.css";
import pool from "../../../assets/images/pool.jpg"
import { NavLink } from "react-router-dom";
import Vacation from "../../../models/vacation";
import dayjs from "dayjs";
interface vacationCardProps {
    vacation: Vacation;
}
function Card(props:vacationCardProps): JSX.Element {
    return (
        <div className="card-container">
       
			<div className="image-container">
                <button className="btn-like"><span className="btn-heart"></span> Like</button>
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
                <button className="price-btn">
                    <NavLink to={''}>view more</NavLink>
                </button>
            </div>
            </div>
            
        </div>
    );
}

export default Card;
