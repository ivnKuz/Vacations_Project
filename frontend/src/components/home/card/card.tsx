import "./card.css";
import pool from "../../../assets/images/pool.jpg"
import Vacation from "../../../models/vacation";
import dayjs from "dayjs";
import User from "../../../models/User";

import vacationsService from "../../../services/Vocations";
import follower from "../../../models/follower";
import { useEffect, useState } from "react";
import followerCount from "../../../models/followerCount";
interface vacationCardProps {
    vacation: Vacation;
    user: User | undefined;
    follows: follower[];
    vocationFollowers: followerCount;
}
function Card(props:vacationCardProps): JSX.Element {
    const [follower, setFollower] = useState<follower>();
    const [followed, setFollowed] = useState<boolean>(false);
    const [numberOfFollowers, setNumberOfFollowers] = useState<number>();
    useEffect(()=>{
        setNumberOfFollowers(props.vocationFollowers.followers)
        checkFollowedVocations();
    }, [])

    //maybe make getFollowers and if vocationId for this userId is there set followed to true <---
    
    async function follow(){
       
        // setNumberOfFollowers(props.vocationFollowers.followers);
        
        followed ? setFollowed(false) : setFollowed(true)
        //thought to set it on when follow button pressed again
        if(!followed) {
            await vacationsService.addFollower(follower);
            await getFollowerCount();
        }
        // TO CHANGE, it deletes every vocation with this Id
        if(followed) { 
            await vacationsService.deleteFollow(follower?.vocationId, follower?.userId)
            await getFollowerCount();
        }
        //wanted to set state from here up, didnt work
        
    }
    async function getFollowerCount(){
        vacationsService.getFollowerCount().then(updatedFollowerCount => {
            // props.setFollowerCount(updatedFollowerCount)
            setNumberOfFollowers(updatedFollowerCount.find(item => item.id === follower?.vocationId)?.followers);
            console.log(updatedFollowerCount.find(item => item.id === follower?.vocationId)?.followers);
            
        }).catch(err => console.log(err));
    }
//save followers to redux ?????
     function  checkFollowedVocations(){  
        const newFollower = {
        userId: props.user?.id, vocationId: props.vacation?.id
    }
     setFollower(newFollower)
        for(let existingFollow of props.follows){
            if(existingFollow.userId === newFollower?.userId){
             if(existingFollow.vocationId === newFollower?.vocationId){
                 setFollowed(true);
             }
            }
         }
    }
    
    
    return (
        <div className="card-container">
       
			<div className="image-container">
                <button onClick={follow} className={followed ? "btn-like pressed" : "btn-like"}><span className="btn-heart"></span> {followed ? "Liked" : "Like"} {numberOfFollowers}</button>
                <h3 className="card-title">{props.vacation.destination}</h3>
                <img className="card-img" src={pool} alt="" />
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
