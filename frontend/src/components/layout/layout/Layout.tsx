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

function Layout(): JSX.Element {
    const navigator = useNavigate();
// const [token, setToken] = useState<string>('')
// useEffect(()=>{
//     if(localStorage.getItem('token')){
//         setToken(localStorage.getItem('token') as string)
//     }else{
//         setToken('');
//     }
// },[])

const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);

const token = authStore.getState().token;
    useEffect(()=>{
         setIsUserLoggedIn((authStore.getState().token !== ''));
         const unsubscribe = authStore.subscribe(()=>{
            setIsUserLoggedIn((authStore.getState().token !== ''));
    })
    !token ? navigator('/login') : navigator('/home')
    return unsubscribe;
    },[])
    useEffect(()=>{
        
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