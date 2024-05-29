import { authStore } from "../../../redux/authState";
import followerCount from "../../../models/followerCount";
import "./Home.css";
import { useEffect, useState } from "react";
import Card from "../card/card";
import Vacation from "../../../models/Vacation";
import User from "../../../models/User";
import {jwtDecode} from "jwt-decode";
import follower from "../../../models/follower";
import Pagination from "../pagination/Pagination";
import notify from "../../../services/Notify";
import VacationService from "../../../services/Vacations";

function Home(): JSX.Element {
    const token = authStore.getState().token;
    const [user, setUser] = useState<User>();
    const [vacations, setVacations] = useState<Vacation[]>([]);
    const [follows, setFollows] = useState<follower[]>([]);
    const [followerCount, setFollowerCount] = useState<followerCount[]>([]);
    const [totalCount, setTotalCount] = useState<number>(1);
    const [sortBy, setSortBy] = useState("byDate");
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const pageSize = 9;

    useEffect(() => {
        if (token) {
            const decodedUser = jwtDecode<{ user: User }>(token).user;
            setUser(decodedUser);
        }
        fetchData();
    }, [token]);

    useEffect(() => {
        fetchVacations();
    }, [pageNumber, sortBy]);

    const fetchData = async () => {
        try {
            const [followsData, followerCountData] = await Promise.all([
                VacationService.getAllFollowers(),
                VacationService.getFollowerCount()
            ]);
            setFollows(followsData);
            setFollowerCount(followerCountData);
        } catch (error) {
            notify.error(error);
        }
    };

    const fetchVacations = async () => {
        try {
            let data;
            if (sortBy === 'byFollow') {
                data = await VacationService.getFilteredByFollowVacations(user?.id, pageNumber, pageSize);
            } else {
                data = await VacationService.getPaginatedVacations(pageNumber, pageSize);
            }

            setVacations(data);
            if (data.length > 0) {
                setTotalCount(data[0].totalVacationsCount as number);
                setTotalPages(Math.ceil(data[0].totalVacationsCount as number / pageSize));
            }
        } catch (error) {
            notify.error('Failed to fetch paginated vacations:' + error);
        }
    };

    const sortVacations = (value: string) => {
        setSortBy(value);
        setPageNumber(1); // Reset to the first page when sort order changes
    };

    const paginate = (pageNumber: number) => setPageNumber(pageNumber);

    const isUserFollows = (vacation: Vacation): boolean => {
        return follows.some(fol => vacation.id === fol.vocationId && user?.id === fol.userId);
    };
    return (
        <div className="Home">
         
         {user?.roleId === 1 ? <div className="actions"> 
         <select role="combobox" value={sortBy} onChange={e => sortVacations(e.target.value)}>
          <option value='byDate'>Sort by date</option>
          <option value='byFollow'>Sort by following</option>
          <option value='byAvailable'>Sort by available</option>
          <option value='byActive'>Sort by active</option>
        </select>
        </div> : null}
       
        <div className="cardsContainer">
               {vacations.map((vacation) => <Card key={vacation.id} 
                currentUserFollows={isUserFollows(vacation)}
                 getData={fetchData}  
                 vacationFollowers={followerCount.filter(vocation => vocation.id === vacation.id)[0]}
                  follows={follows}  
                  vacation={vacation}
                   user={user}/>
        )}  
        </div>
        <Pagination paginate={paginate} vocationPerPage={pageSize} totalVocations={vacations.length ? vacations[0].totalVacationsCount as number : 1}/>
       
        </div>
    );
    }

export default Home;
