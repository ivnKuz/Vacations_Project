import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import { useEffect, useState } from 'react';
import { authStore } from '../../../redux/authState';
import authentication from '../../../services/Authentication';
import notify from '../../../services/Notify';
import { jwtDecode } from 'jwt-decode';
import User from '../../../models/User';



function Header(): JSX.Element {
    const [user, setUser] = useState<User>();
    const [token, setToken] = useState<string>('');
    useEffect(()=>{
        const token = authStore.getState().token;
        if(token){
            const user = jwtDecode<{user: User}>(token).user;
            setUser(user)
         }
     const unsubscribe = authStore.subscribe(()=>{
        const token = authStore.getState().token;
        if(token){
           const user = jwtDecode<{user: User}>(token).user;
     setToken(token)
            setUser(user)
        }else{
            setUser(undefined)
        }
     });
     console.log(user);
     return unsubscribe
    },[]);

    function logout(){
        notify.success(`Logged out successfully`)
        authentication.logout();
    }
    return (
        <div className='Header'>
             <h1>JoJo's Travels</h1> 
            <div className="Menu">
            {user?.roleId === 2 ?<NavLink className="headerLink" to="/home">Home</NavLink> : null }
            {user?.roleId === 2 ? <NavLink className="headerLink" to="/controlls/add-vacation">Add Vacation</NavLink> : null}
            {user?.roleId === 2 ? <NavLink className="headerLink" to="/controlls/vacations-report">See Vacations Report</NavLink> : null}
           
           
            <div className='userProfile'>
                <span>Hello {user?.name } | </span>
                <NavLink to="/login" onClick={logout}>Logout</NavLink>
            </div>
            
        </div>
        </div>
    );
}

export default Header;