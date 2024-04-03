import { useNavigation } from "react-router-dom";
import { authStore } from "../../../redux/authState";
import "./Home.css";
// if you have an image to display, this is how you would import it
// import Products2ImageSource from '../../../assets/images/products2.jpg';
import { useEffect, useState } from "react";

function Home(): JSX.Element {
    
    return (
        <div className="Home">
               hi from home 
        </div>
    );
    }

export default Home;
