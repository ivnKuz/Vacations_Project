import { authStore } from "../../../redux/authState";
import VocationsService from "../../../services/Vocations";
import followerCount from "../../../models/followerCount";
import "./Home.css";
// if you have an image to display, this is how you would import it
// import Products2ImageSource from '../../../assets/images/products2.jpg';
import { useEffect, useState } from "react";
import Card from "../card/card";
import Vocation from "../../../models/Vocation";
import User from "../../../models/User";
import { jwtDecode } from "jwt-decode";
import follower from "../../../models/follower";

function Home(): JSX.Element {
    
    const token = authStore.getState().token;
    const [user, setUser] = useState<User>();
    const [vocations, setVocations] = useState<Vocation[]>([]);
    const [follows, setFollows] = useState<follower[]>([]);
    const [followerCount, setFollowerCount] = useState<followerCount[]>([]);
    const [sortBy, setSortBy] = useState("byDate");
    
 
  function sortVocations(value: string){
    if (value === 'byDate') {
      vocations.sort((a,b) => {
          let firstDate = a.startDate as unknown as Date;
          let secondDate = b.startDate as unknown as Date;
          return firstDate > secondDate ?  1 :  -1;
      })
      setSortBy('byDate')
  }
    if(value === 'byFollow'){
      const sortedVocations = vocations.reduce((acc:Vocation[], element:Vocation) => {
        for(let fol of follows){
            if (element.id === fol.vocationId && user?.id === fol.userId) {
                return [element, ...acc];
              }
        }
        return [...acc, element];
      }, []);
      console.log(sortedVocations);
      setSortBy('byFollow')
      setVocations(sortedVocations)
    }
   
  }
    useEffect(()=>{
        Promise.all([
            VocationsService.getAllFollowers(),
            VocationsService.getAll(),
            VocationsService.getFollowerCount()
        ]).then(results => {
            setFollows(results[0]);
            setVocations(results[1]);
            setFollowerCount(results[2]);
        }).catch()
       
       

        if(token){
            const user = jwtDecode<{user: User}>(token).user;
            setUser(user)
         }
    },[]);
    // console.log(follows);
    // console.log(vocations[0]?.id);
   
    console.log(follows);
    
    return (
      
        <div className="Home">
         <div className="actions">
        <select value={sortBy} onChange={e => sortVocations(e.target.value)}>
          <option value='byDate'>Sort by date</option>
          <option value='byFollow'>Sort by following</option>
          <option value='packed'>Sort by the packed status</option>

        </select>
        </div>
        <div className="cardsContainer">
               {vocations.map((vacation, indx) => <Card key={indx}  vocationFollowers={followerCount.filter(vocation => vocation.id === vacation.id)[0]} follows={follows}  vocation={vacation} user={user}/>
        )}  
        </div>
        </div>
    );
    }

export default Home;
