import { useEffect, useState } from "react";
import "./card_like_btn.css";
import follower from "../../../models/follower";
import Vacation from "../../../models/Vacation";
import User from "../../../models/User";
import followerCount from "../../../models/followerCount";
import VacationsService from "../../../services/Vacations";

interface card_props {
    vacation: Vacation;
    user: User | undefined;
    follows: follower[];
    vacationFollowers: followerCount;
    currentUserFollows:boolean;
}
function Card_like_btn(props:card_props): JSX.Element {
    const [follower, setFollower] = useState<follower>();
    const [followed, setFollowed] = useState<boolean | undefined>(props.currentUserFollows);
    const [numberOfFollowers, setNumberOfFollowers] = useState<number>();
    
    useEffect(()=>{
        checkFollowedVocations();
        setNumberOfFollowers(props.vacationFollowers.followers)
    },[]);

     function  checkFollowedVocations(){  
        const currentFollower = {
        userId: props.user?.id, vocationId: props.vacation?.id
    }
     setFollower(currentFollower)
    }
  
    async function follow(){
        if(!followed) {
            await VacationsService.addFollower(follower);
            await getFollowerCount();
            setFollowed(true);
        }
        if(followed) { 
            await VacationsService.deleteFollow(follower?.vocationId, follower?.userId);
            await getFollowerCount();
            setFollowed(false)
        }
    }

    async function getFollowerCount(){
        VacationsService.getFollowerCount().then(updatedFollowerCount => {
            setNumberOfFollowers(updatedFollowerCount.find(item => item.id === follower?.vocationId)?.followers);
        }).catch(err => console.log(err));
    }
    return (
        <div className="card_like_btn">
			<button onClick={follow} className={followed ? "btn-like pressed" : "btn-like"}><span className="btn-heart"></span> {props.currentUserFollows ? "Liked" : "Like"} {numberOfFollowers}</button>
        </div>
    );
}

export default Card_like_btn;
