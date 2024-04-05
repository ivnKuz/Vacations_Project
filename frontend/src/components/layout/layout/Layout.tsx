import { useEffect, useState } from 'react';
import Home from '../../home/home/Home';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Routing from '../routing/Routing';
import './Layout.css';
import { authStore } from '../../../redux/authState';
import { useNavigate } from 'react-router-dom';
import SignUp from '../../auth/signUp/SignUp';
import Login from '../../auth/login/Login';
import { jwtDecode } from 'jwt-decode';
import User from '../../../models/User';

function Layout(): JSX.Element {
    const navigator = useNavigate();
    const [user, setUser] = useState<User>();
    // const [token, setToken] = useState<string>('');
// const [token, setToken] = useState<string>('')
// useEffect(()=>{
//     if(localStorage.getItem('token')){
//         setToken(localStorage.getItem('token') as string)
//     }else{
//         setToken('');
//     }
// },[])

// const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);

const token = authStore.getState().token;
    useEffect(()=>{
    !token ? navigator('/login') : navigator('/home');
    },[])
    return ( 
      <div className="Layout">
             <header>
                {token && <Header />}
            </header>

            <main>
            <Routing /> 
            </main>

            <footer>
                <Footer />
            </footer>

        </div> 
    )
}

export default Layout;