import { authStore } from "../../../redux/authState";
import VocationsService from "../../../services/Vacations";
import followerCount from "../../../models/followerCount";
import "./Home.css";
// if you have an image to display, this is how you would import it
// import Products2ImageSource from '../../../assets/images/products2.jpg';
import { useEffect, useRef, useState } from "react";
import Card from "../card/card";
import Vacation from "../../../models/Vacation";
import User from "../../../models/User";
import { jwtDecode } from "jwt-decode";
import follower from "../../../models/follower";
import Pagination from "../pagination/Pagination";
import notify from "../../../services/Notify";
import VacationService from "../../../services/Vacations";

function Home(): JSX.Element {
    
    const token = authStore.getState().token;
    const [user, setUser] = useState<User>();
    const [vacations, setVocations] = useState<Vacation[]>([]);
    const [initialVocations, setInitialVocations] = useState<Vacation[]>([]);
    const [follows, setFollows] = useState<follower[]>([]);
    const [followerCount, setFollowerCount] = useState<followerCount[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [vocationsPerPage] = useState<number>(3)
    const [sortBy, setSortBy] = useState("byDate");
    //getting all the data needed
    const getData = ()=> {
      Promise.all([
        VacationService.getAllFollowers(),
        VacationService.getAll(),
        VacationService.getFollowerCount()
    ]).then(results => {
        setFollows(results[0]);
        setVocations(results[1]);
        setFollowerCount(results[2]);
        setInitialVocations(results[1]);
        
    }).catch(e=> notify.error(e));
    } 
    //DELETE LATER IN DEVELOPMENT: can try and move this get data function back to use effect, and make it just updateFollows and put followerCount in dependency array if it'll work
  //sorting function changes sortBy state depending on value passed and the conditions are executed in useEffect below to update in real time
    function sortVocations(value: string) {
      setSortBy(value);
      setCurrentPage(1);
      //updating data for filters to be up to date when filter triggered.
      getData();
  }
  //another use effect for filtering
  useEffect(() => {
    if (sortBy === 'byDate') {
        const sortedByDate = [...initialVocations].sort((a, b) => {
            let firstDate = new Date(a.startDate as unknown as string);
            let secondDate = new Date(b.startDate as unknown as string);
            return firstDate.getTime() - secondDate.getTime();
        });
        setVocations(sortedByDate);
    } else if (sortBy === 'byFollow') {
        const filteredByFollow = initialVocations.filter(vacation => {
            for (let fol of follows) {
                if (vacation.id === fol.vocationId && user?.id === fol.userId) return true;
            }
            return false;
        });
        setVocations(filteredByFollow);
    } else if (sortBy === 'byActive') {
        const currentTime = new Date().getTime();
        const filteredByActive = initialVocations.filter(d => {
            const startDate = new Date(d.startDate as unknown as Date).getTime();
            const endDate = new Date(d.endDate as unknown as Date).getTime();
            return (currentTime < startDate && startDate < endDate);
        });
        setVocations(filteredByActive);
    }
    
}, [sortBy, initialVocations, follows, user]);

    useEffect(()=>{
        //getting all the data from database and user data.
      getData();
        if(token){
            const user = jwtDecode<{user: User}>(token).user;
            setUser(user)
         }
    },[]);

      //MIGHT MOVE IT TO THE CARD LIKE COMPONENT, CHECK LATER
      //passing this as props to card like button to set state of liked or not liked
      function isUserFollows(vocation:Vacation): boolean{
        for(let fol of follows){
          if (vocation.id === fol.vocationId && user?.id === fol.userId) {
            return true;
            }
      }
      return false;
      }
      //PAGINATION 
    //get current vocations
    const indexOfLastVocation = currentPage * vocationsPerPage;
    const indexOfFirstVocation = indexOfLastVocation - vocationsPerPage;
    const currentVocations = vacations.slice(indexOfFirstVocation, indexOfLastVocation)
    //Change page
      const paginate = (pageNumber:number)=> setCurrentPage(pageNumber)

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
               {currentVocations.map((vacation, indx) => <Card key={vacation.id} currentUserFollows={isUserFollows(vacation)}  vacationFollowers={followerCount.filter(vocation => vocation.id === vacation.id)[0]} follows={follows}  vacation={vacation} user={user}/>
        )}  
        </div>
        <div className="pagination">
        <Pagination paginate={paginate} vocationPerPage={vocationsPerPage} totalVocations={vacations.length}/>
        </div>
        </div>
    );
    }

export default Home;
