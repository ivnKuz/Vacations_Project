import { authStore } from "../../../redux/authState";
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
import axios from "axios";
function Home(): JSX.Element {
    
    const token = authStore.getState().token;
    const [user, setUser] = useState<User>();
    const [vacations, setVacations] = useState<Vacation[]>([]);
    const [initialVocations, setInitialVocations] = useState<Vacation[]>([]);
    const [follows, setFollows] = useState<follower[]>([]);
    const [followerCount, setFollowerCount] = useState<followerCount[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [vocationsPerPage] = useState<number>(9)
    const [sortBy, setSortBy] = useState("byDate");
    //getting all the data needed
    // const [vacations, setVacations] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const pageSize = 9;
    useEffect(() => {
      getData();
      async function fetchVacations() {
        try {
          VacationService.getPaginatedVacations(pageNumber, pageSize).then(data => setVacations(data))
          const totalCount = await VacationService.getTotalVacationCount()
      
          // Calculate total pages based on total count of vacations and page size
          
          console.log(totalCount);
          console.log(totalCount);
          
          if (totalCount) {
            const totalPagesCount = Math.ceil(totalCount / pageSize);
            
          setTotalPages(totalPagesCount);
          }
          
        } catch (error) {
          console.error('Failed to fetch paginated vacations:', error);
        }
      }
  
      fetchVacations();
    }, [pageNumber, pageSize]);
  
    const nextPage = () => {
      setPageNumber(prevPage => Math.min(prevPage + 1, totalPages));
    };
  
    const prevPage = () => {
      setPageNumber(prevPage => Math.max(prevPage - 1, 1));
    };
    const getData = ()=> {
      Promise.all([
        VacationService.getAllFollowers(),
        VacationService.getFollowerCount()
    ]).then(results => {
        setFollows(results[0]);
        setFollowerCount(results[1]);
        
    }).catch(e=> notify.error(e));
    } 
    //DELETE LATER IN DEVELOPMENT: can try and move this get data function back to use effect, and make it just updateFollows and put followerCount in dependency array if it'll work
  //sorting function changes sortBy state depending on value passed and the conditions are executed in useEffect below to update in real time
    function sortVocations(value: string) {
      setSortBy(value);
      setPageNumber(1);
      //updating data for filters to be up to date when filter triggered.
      getData();
  }
  //another use effect for filtering
//   useEffect(() => {
//     if (sortBy === 'byDate') { // sort by date,this one is also default sort.
//         const sortedByDate = [...initialVocations].sort((a, b) => {
//             let firstDate = new Date(a.startDate as unknown as string);
//             let secondDate = new Date(b.startDate as unknown as string);
//             return firstDate.getTime() - secondDate.getTime();
//         });
//         setVocations(sortedByDate);
//     } else if (sortBy === 'byFollow') { // sort by vacations current user follows
//         const filteredByFollow = initialVocations.filter(vacation => {
//             for (let fol of follows) {
//                 if (vacation.id === fol.vocationId && user?.id === fol.userId) return true;
//             }
//             return false;
//         });
//         setVocations(filteredByFollow);
//     } else if (sortBy === 'byAvailable') { //sort by available vacations that didnt start yet
//         const currentTime = new Date().getTime();
//         const filteredByActive = initialVocations.filter(d => {
//             const startDate = new Date(d.startDate as unknown as Date).getTime();
//             const endDate = new Date(d.endDate as unknown as Date).getTime();
//             return (currentTime < startDate && startDate < endDate);
//         });
//         setVocations(filteredByActive);
//     } else if (sortBy === 'byActive') { //sort by vacations that currently happening
//       const currentTime = new Date().getTime();
//       const filteredByActive = initialVocations.filter(d => {
//           const startDate = new Date(d.startDate as unknown as Date).getTime();
//           const endDate = new Date(d.endDate as unknown as Date).getTime();
//           return (currentTime >= startDate && currentTime <= endDate);
//       });
//       setVocations(filteredByActive);
//   }
    
// }, [sortBy, initialVocations, follows, user]);

    useEffect(()=>{
        //getting all the data from database and user data.
     
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
   
    return (
        <div className="Home">
         
         {user?.roleId === 1 ? <div className="actions"> 
         <select role="combobox" value={sortBy} onChange={e => sortVocations(e.target.value)}>
          <option value='byDate'>Sort by date</option>
          <option value='byFollow'>Sort by following</option>
          <option value='byAvailable'>Sort by available</option>
          <option value='byActive'>Sort by active</option>
        </select>
        </div> : null}
       
        <div className="cardsContainer">
               {vacations.map((vacation) => <Card key={vacation.id}  currentUserFollows={isUserFollows(vacation)} getData={getData}  vacationFollowers={followerCount.filter(vocation => vocation.id === vacation.id)[0]} follows={follows}  vacation={vacation} user={user}/>
        )}  
        </div>
        <Pagination prevPage={prevPage} nextPage={nextPage} pageNumber={pageNumber} totalPages={totalPages}></Pagination>
       
        </div>
    );
    }

export default Home;
