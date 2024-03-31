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
            setUser(user)
        }else{
            setUser(undefined)
        }
     });
     return unsubscribe
    },[]);

    function logout(){
        notify.success(`Logged out successfully`)
        authentication.logout();
    }
    return (
        <div className='Header'>
             <h1>Travelground: Best Vacations for you</h1> 
            <div className="Menu">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/lorem-ipsums">LoremIposums</NavLink>
            <NavLink to="/lorem-ipsums/add">Add LoremIposum</NavLink>
            <NavLink to="/about">About</NavLink>

            {user &&  
            <div className='userProfile'>
                <span>Hello {user.name} | </span>
                <NavLink to="/login" onClick={logout}>Logout</NavLink>
            </div>
            }
        </div>
        </div>
    );
}

export default Header;