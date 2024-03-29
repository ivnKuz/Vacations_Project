import Routing from "../../layout/routing/Routing";
import "./authPage.css";

import { NavLink, useNavigate } from "react-router-dom";
function AuthPage(): JSX.Element {
    const navigator = useNavigate();
    navigator('/login')
    return (
        <div>
            <Routing />
        </div>
    );
    }

export default AuthPage;
