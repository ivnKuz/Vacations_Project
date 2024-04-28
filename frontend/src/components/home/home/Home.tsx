import { authStore } from "../../../redux/authState";
import VocationsService from "../../../services/Vocations";
import followerCount from "../../../models/followerCount";
import "./Home.css";
// if you have an image to display, this is how you would import it
// import Products2ImageSource from '../../../assets/images/products2.jpg';
import { useEffect, useRef, useState } from "react";
import Card from "../card/card";
import Vocation from "../../../models/Vocation";
import User from "../../../models/User";
import { jwtDecode } from "jwt-decode";
import follower from "../../../models/follower";

function Home(): JSX.Element {
    
    const token = authStore.getState().token;
    const [user, setUser] = useState<User>();
    const [vocations, setVocations] = useState<Vocation[]>([]);
    const [initialVocations, setInitialVocations] = useState<Vocation[]>([]);
    const [follows, setFollows] = useState<follower[]>([]);
    const [followerCount, setFollowerCount] = useState<followerCount[]>([]);
    const [sortBy, setSortBy] = useState("byDate");
    if(sortBy === 'byDate'){
      vocations.sort((a,b) => {
        let firstDate = a.startDate as unknown as Date;
        let secondDate = b.startDate as unknown as Date;
        return firstDate > secondDate ?  1 :  -1;
    })
  }
 
  function sortVocations(value: string){
   
    setVocations(initialVocations)
    console.log('idk wtf');
    
    if (value === 'byDate') {
      vocations.sort((a,b) => {
          let firstDate = a.startDate as unknown as Date;
          let secondDate = b.startDate as unknown as Date;
          return firstDate > secondDate ?  1 :  -1;
      })
      setSortBy(value)
  }
     if(value === 'byFollow'){
      const filteredByFollow = vocations.filter(vocation => {
        for(let fol of follows){
          if(vocation.id === fol.vocationId && user?.id === fol.userId)  return true;
            }
            return false;
      })
      
      setSortBy(value)
     setVocations(filteredByFollow)
    }
     if(value === 'byActive'){
      const currentTime = new Date().getTime()
      const filteredByActive = vocations.filter(d => {
         const startDate = new Date(d.startDate as unknown as Date).getTime();
         const endDate = new Date(d.endDate as unknown as Date).getTime();
               return (currentTime < startDate && startDate < endDate);
         });
   
     setVocations(filteredByActive)
     setSortBy(value)
     
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
        setInitialVocations(results[1]);
    }).catch()

        if(token){
            const user = jwtDecode<{user: User}>(token).user;
            setUser(user)
         }
    },[]);

      
      function isUserFollows(vocation:Vocation): boolean{
        for(let fol of follows){
          if (vocation.id === fol.vocationId && user?.id === fol.userId) {
            return true;
            }
      }
      return false;
      }
    return (
      
        <div className="Home">
         <div className="actions">
        <select value={sortBy} onChange={e => sortVocations(e.target.value)}>
          <option value='byDate'>Sort by date</option>
          <option value='byFollow'>Sort by following</option>
          <option value='byActive'>Sort by only active</option>

        </select>
        </div>
        <div className="cardsContainer">
               {vocations.map((vacation, indx) => <Card key={vacation.id} currentUserFollows={isUserFollows(vacation)}  vocationFollowers={followerCount.filter(vocation => vocation.id === vacation.id)[0]} follows={follows}  vocation={vacation} user={user}/>
        )}  
        </div>
        </div>
    );
    }

export default Home;
