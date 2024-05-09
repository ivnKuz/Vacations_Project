import SignUp from "../../auth/signUp/SignUp";
import Login from "../../auth/login/Login";
import Home from "../../home/home/Home";
import Add from "../../vacations-managment/add/Add";
import Edit from "../../vacations-managment/edit/Edit";
import Page404 from "../page404/Page404";
import { Routes, Route, Navigate } from 'react-router-dom';
function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            {/* <Route path="/" element={<Navigate to="/home" />} /> */}
             <Route path="/login" element={<Login />} />
             <Route path="/signUp" element={<SignUp />} />
            <Route path="/controlls/edit-vacation/:id" element={<Edit />} />
            <Route path="/controlls/add-vacation" element={<Add />} />
            <Route path="*" element={<Page404 />} />

        </Routes>

    );
}

export default Routing;
