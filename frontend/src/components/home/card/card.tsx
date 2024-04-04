import "./card.css";
import pool from "../../../assets/images/pool.jpg"
import { NavLink } from "react-router-dom";
import Vacation from "../../../models/vacation";
interface vacationCardProps {
    vacation: Vacation;
}
function Card(props:vacationCardProps): JSX.Element {
    return (
        <div className="card-container">
        <h3 className="card-title">{props.vacation.destination}</h3>
			<div className="image-container">
                <img className="card-img" src={pool} alt="" />
            </div>
            
            <div className="card-body">
                <div className="first-layer">
                     {props.vacation.startDate?.toString()} {props.vacation.endDate?.toString()}
                 </div>
                <div className="second-layer">
                {props.vacation.description}
                 </div>
            </div>
            <div className="btn-container">
                <button className="price-btn">
                    <NavLink to={''}>view more</NavLink>
                </button>
            </div>
        </div>
    );
}

export default Card;
