import "./card_admin_btns.css";
import editImage from "../../../assets/images/edit.png"
import binImage from  "../../../assets/images/bin.png"
import vacations from "../../../services/Vacations";
import Vacation from "../../../models/Vacation";
import notify from "../../../services/Notify";
import { NavLink } from "react-router-dom";
interface adminProps {
    vacation: Vacation;
    getData: () => void;
}
function Card_admin_btns(props: adminProps): JSX.Element {

    

    async function  deleteVacation(){
        // eslint-disable-next-line no-restricted-globals
        const question = confirm('are you sure you want to delete this vacation?');
        if(question){
            console.log(props.vacation.id);
            await vacations.deleteVacation(props.vacation.id);
            await props.getData();
            notify.success(`successfully deleted vacation ${props.vacation.destination}`)
        }else{
            notify.error('deletion canceled')
        }
    }
    return (
        <div className="card_admin_btns">
            <button className="btn-edit">
            <img className="btn-image" src={editImage} alt=""/> 
            <NavLink to={`/controlls/edit-vacation/${props.vacation.id}`}>Edit</NavLink></button>
            <button onClick={deleteVacation} className="btn-delete">
            <img className="btn-image" src={binImage} alt=""/>Delete</button>
        </div>
    );
}

export default Card_admin_btns;
