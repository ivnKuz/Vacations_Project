import "./card_admin_btns.css";
import editImage from "../../../assets/images/edit.png"
import binImage from  "../../../assets/images/bin.png"
function Card_admin_btns(): JSX.Element {
    return (
        <div className="card_admin_btns">
            <button className="btn-edit">
            <img className="btn-image" src={editImage} alt=""/> Edit</button>
            <button className="btn-delete">
            <img className="btn-image" src={binImage} alt=""/>Delete</button>
        </div>
    );
}

export default Card_admin_btns;
