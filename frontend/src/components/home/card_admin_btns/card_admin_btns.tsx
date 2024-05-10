import "./card_admin_btns.css";
import editImage from "../../../assets/images/edit.png"
import binImage from  "../../../assets/images/bin.png"
import vacations from "../../../services/Vacations";
import Vacation from "../../../models/Vacation";
import notify from "../../../services/Notify";
import { NavLink } from "react-router-dom";
import Modal from 'react-modal';
import { useState } from 'react';
interface adminProps {
    vacation: Vacation;
    getData: () => void;
}
function Card_admin_btns(props: adminProps): JSX.Element {
    //using react modal npm to show Confirmation on delete button.
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    //if Admin pressed yes, delete and reload the state of vacations, if no, just set modal to false(close it)
    async function handleYesClick(){
        await vacations.deleteVacation(props.vacation.id);
        props.getData();
        notify.success(`successfully deleted vacation ${props.vacation.destination}`)
    }
    
    return (
        <div className="card_admin_btns">
            <NavLink to={`/controlls/edit-vacation/${props.vacation.id}`} className="navlink-edit">
            <button className="btn-edit">
            <img className="btn-image" src={editImage} alt=""/> 
            Edit</button></NavLink>
            <button onClick={() => setModalIsOpen(true)} className="btn-delete">
            <img className="btn-image" src={binImage} alt=""/>Delete</button>
            <div className="react-modal-overlay">
      {/* <button onClick={}>Open Modal</button> */}
      <Modal
  isOpen={modalIsOpen}
  onRequestClose={() => setModalIsOpen(false)}
  className="custom-modal"
  contentLabel="Example Modal"
>
  <h2>Confirmation</h2>
  <p>Are you sure you want to delete {props.vacation.destination}?</p>
  <div className="button-container">
    <button className="btn btn-yes" onClick={() => handleYesClick()}>Yes</button>
    <button className="btn btn-no" onClick={() => setModalIsOpen(false)}>No</button>
  </div>
</Modal>
    </div>

        </div>
        

    );
}

export default Card_admin_btns;
