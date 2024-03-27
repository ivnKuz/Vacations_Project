import "./SignUp.css";
// if you have an image to display, this is how you would import it
// import Products2ImageSource from '../../../assets/images/products2.jpg';
import { useEffect, useState } from "react";
import SignUpModel from "../../../models/SignUp";
import userIcon from "../../../assets/images/user-icon.png"
import passwordIcon from "../../../assets/images/password-icon.jpeg"
import emailIcon from "../../../assets/images/email-icon.webp"
import { useForm } from "react-hook-form";
function SignUp(): JSX.Element {
    const {register, handleSubmit} = useForm<SignUpModel>();

    useEffect(() => {
        /*
        perform any operations required for the loading of this component here.
        remember we can't use async function here, so either use then/catch
        or an IIFE
        */
       setSomething('a string from state')
    }, []);
    async function submitUserData(signUp: SignUpModel): Promise<void>{
        try{
            await auth.signup(signUp);
            notify.success('You have been successfully signed up');
            navigate('/home');
        }catch(err){
            notify.error(err);
        }
    }
    return (
        <div className="container">
                <form  onSubmit={handleSubmit(submitUserData)}>
                <div className="header">
                    <div className="text">Sign Up</div>
                </div>

                <div className="inputs">
                <div className="input">
                    <img src={userIcon} alt=""/>
                    <input type="text" placeholder="Name" {...register('firstName')}/>
                </div>

                <div className="input">
                    <img src={userIcon} alt=""/>
                    <input type="text" placeholder="Last Name" {...register('lastName')}/>
                </div>

                <div className="input">
                    <img src={emailIcon} alt=""/>
                    <input type="email" placeholder="Email" {...register('email')}/>
                </div>

                <div className="input">
                    <img src={passwordIcon} alt=""/>
                    <input type="password" placeholder="Password" {...register('password')}/>
                </div>
                </div>
                <div className="submit-container">
                    <button className="submit">Sign Up</button>
                    <button className="submit">Login</button>
                </div>
                </form>
        </div>
    );
    }

export default SignUp;
