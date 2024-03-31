import { useEffect, useState } from 'react';
import Home from '../../home/home/Home';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Routing from '../routing/Routing';
import './Layout.css';
import LoginRouter from '../routing/loginRouter';
import { authStore } from '../../../redux/authState';

function Layout(): JSX.Element {
    
// const [token, setToken] = useState<string>('')
// useEffect(()=>{
//     if(localStorage.getItem('token')){
//         setToken(localStorage.getItem('token') as string)
//     }else{
//         setToken('');
//     }
// },[])

const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);

    useEffect(()=>{
         setIsUserLoggedIn((authStore.getState().token !== ''));
         const unsubscribe = authStore.subscribe(()=>{
            setIsUserLoggedIn((authStore.getState().token !== ''));
    })
    return unsubscribe;
    },[])
    return (
        <div className="Layout">
            <header>
                {isUserLoggedIn && <Header />}
            </header>

            <main>
                {isUserLoggedIn ? <Routing /> :  <LoginRouter />}
                
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout;