import SignUp from "../../auth/signUp/SignUp";
import Login from "../../auth/login/Login";
import Page404 from "../page404/Page404";
import { Routes, Route, Navigate } from 'react-router-dom';
function LoginRouter(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="*" element={<Page404 />} />
        </Routes>

    );
}

export default LoginRouter;
