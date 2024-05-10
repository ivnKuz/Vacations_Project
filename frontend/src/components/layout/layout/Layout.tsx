import { useEffect, useState } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Routing from '../routing/Routing';
import './Layout.css';
import { authStore } from '../../../redux/authState';
import { useNavigate } from 'react-router-dom';

function Layout(): JSX.Element {
    const navigator = useNavigate();

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