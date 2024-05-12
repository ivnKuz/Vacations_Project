import SignUp from "../../auth/signUp/SignUp";
import Login from "../../auth/login/Login";
import Home from "../../home/home/Home";
import Add from "../../vacations-managment/add/Add";
import Edit from "../../vacations-managment/edit/Edit";
import Page404 from "../page404/Page404";
import { Routes, Route } from 'react-router-dom';
import VacationsReport from "../../vacations-managment/vacationsReport/vacationsReport";
function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
             <Route path="/login" element={<Login />} />
             <Route path="/signUp" element={<SignUp />} />
            <Route path="/controlls/edit-vacation/:id" element={<Edit />} />
            <Route path="/controlls/add-vacation" element={<Add />} />
            <Route path="/controlls/vacations-report" element={<VacationsReport />} />
            <Route path="*" element={<Page404 />} />

        </Routes>

    );
}

export default Routing;
