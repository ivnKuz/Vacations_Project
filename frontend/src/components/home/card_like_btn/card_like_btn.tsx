import { useEffect, useState } from "react";
import "./card_like_btn.css";
import follower from "../../../models/follower";
import Vocation from "../../../models/Vocation";
import User from "../../../models/User";
import followerCount from "../../../models/followerCount";
import VocationsService from "../../../services/Vocations";
interface card_props {
    vocation: Vocation;
    user: User | undefined;
    follows: follower[];
    vocationFollowers: followerCount;
    // setFollows: React.Dispatch<React.SetStateAction<follower[]>>;
}
function Card_like_btn(props:card_props): JSX.Element {
    const [follower, setFollower] = useState<follower>();
    const [followed, setFollowed] = useState<boolean | undefined>(false);
    const [numberOfFollowers, setNumberOfFollowers] = useState<number>();
    useEffect(()=>{
        setFollower({
            userId: props.user?.id, vocationId: props.vocation?.id
        })
        setNumberOfFollowers(props.vocationFollowers.followers)
        checkFollowedVocations();
    }, [])

    //maybe make getFollowers and if vocationId for this userId is there set followed to true <---
   
//save followers to redux ?????
     function  checkFollowedVocations(){  
        const newFollower = {
        userId: props.user?.id, vocationId: props.vocation?.id
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
   

    async function follow(){
        followed ? setFollowed(false) : setFollowed(true)
        //thought to set it on when follow button pressed again
        if(!followed) {
            await VocationsService.addFollower(follower);
            await getFollowerCount();
        }
        // TO CHANGE, it deletes every vocation with this Id
        if(followed) { 
            await VocationsService.deleteFollow(follower?.vocationId, follower?.userId)
            await getFollowerCount();
        }
        //wanted to set state from here up, didnt work
        
    }
    async function getFollowerCount(){
        VocationsService.getFollowerCount().then(updatedFollowerCount => {
            setNumberOfFollowers(updatedFollowerCount.find(item => item.id === follower?.vocationId)?.followers);
        }).catch(err => console.log(err));
    }
  
    return (
        <div className="card_like_btn">
			<button onClick={follow} className={followed ? "btn-like pressed" : "btn-like"}><span className="btn-heart"></span> {followed ? "Liked" : "Like"} {numberOfFollowers}</button>
        </div>
    );
}

export default Card_like_btn;
