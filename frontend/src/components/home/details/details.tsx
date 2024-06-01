import { useEffect, useState } from "react";
import "./details.css";
import vacationsService from "../../../services/Vacations";
import { NavLink, useParams } from "react-router-dom";
import Vacation from "../../../models/Vacation";
import notify from "../../../services/Notify";
import dayjs from "dayjs";

function Details(): JSX.Element {
    const params = useParams();
    const vacationId = Number(params.id);
    const [vacation, setVacation] = useState<Vacation>();
    useEffect(()=>{
        vacationsService.getOne(vacationId).then(setVacation).catch(notify.error);
    },[])

    return (
        <div className="details">
            <div className="container_left">
        <NavLink to="/home"><button className="btn-back">{"< Back To Home Page"}</button></NavLink>
                <img className="container_left_image" src={vacation?.imageUrl} alt="" />
                <div className="container_left_textUnderImage"><span>{vacation?.destination}</span></div>
            </div>
            <div className="container_right">

                <div className="description">
                    <h3>Description:</h3>
                    <p className="description_text">{vacation?.description}</p>
                </div>

                <div>
                <h3>Dates:</h3>
                <p className="date date_start">Starts on: {dayjs(vacation?.startDate?.toString()).format('DD.MM.YYYY')}</p>
                <p className="date date_end">Ends on: {dayjs(vacation?.endDate?.toString()).format('DD.MM.YYYY')}</p>
                  
                    
                     
                 </div>
                <div>
                    <h3>Price:</h3>
                    <p className="price_text">{vacation?.price}$</p>
                </div>
                <button className="btn_book_vacation">Book this vacation for {vacation?.price}$</button>
            </div>
        </div>
    );
    
}

export default Details;
