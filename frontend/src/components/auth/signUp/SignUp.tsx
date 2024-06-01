import "./SignUp.css";
import SignUpModel from "../../../models/SignUp";
import userIcon from "../../../assets/images/user-icon.png"
import passwordIcon from "../../../assets/images/password-icon.jpeg"
import emailIcon from "../../../assets/images/email-icon.webp"
import { useForm } from "react-hook-form";
import notify from "../../../services/Notify";
import { useNavigate } from "react-router-dom";
import authentication from "../../../services/Authentication";
import { NavLink } from "react-router-dom";

function SignUp(): JSX.Element {
    const {register, handleSubmit} = useForm<SignUpModel>();
    const navigator = useNavigate();
   
    async function submitUserData(signUp: SignUpModel): Promise<void>{
        try{
            await authentication.signup(signUp);
            notify.success('You have been successfully signed up');
            navigator('/home');
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
                    <button className="submit">Sign Up</button>
              
                </form>
                
                <NavLink to="/login">Login</NavLink>
        </div>
    );
    }

export default SignUp;
