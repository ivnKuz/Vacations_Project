import "./Login.css";
// if you have an image to display, this is how you would import it
// import Products2ImageSource from '../../../assets/images/products2.jpg';
import { useEffect, useState } from "react";
import LoginData from "../../../models/Login";
import passwordIcon from "../../../assets/images/password-icon.jpeg"
import emailIcon from "../../../assets/images/email-icon.webp"
import { useForm } from "react-hook-form";
import notify from "../../../services/Notify";
import { NavLink, useNavigate } from "react-router-dom";
import authentication from "../../../services/Authentication";
function Login(): JSX.Element {
    const {register, handleSubmit} = useForm<LoginData>();
    const navigator = useNavigate();
   
    async function submitLoginData(login: LoginData): Promise<void>{
        try{
            await authentication.login(login);
            notify.success('You successfully logged in');
            navigator('/home');
        }catch(err){
            notify.error(err);
        }
    }
    return (
        <div className="container">
                <form  onSubmit={handleSubmit(submitLoginData)}>
                <div className="header">
                    <div className="text">Login</div>
                </div>

                <div className="inputs">
                <div className="input">
                    <img src={emailIcon} alt=""/>
                    <input type="email" placeholder="Email" {...register('email')}/>
                </div>

                <div className="input">
                    <img src={passwordIcon} alt=""/>
                    <input type="password" placeholder="Password" {...register('password')}/>
                </div>
                </div>
                    <button className="submit">Login</button>
              
                </form>
                
                <NavLink to="/signUp">Sign Up</NavLink>
        </div>
    );
    }

export default Login;
