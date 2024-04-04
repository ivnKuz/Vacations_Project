import SignUp from "../../auth/signUp/SignUp";
import Login from "../../auth/login/Login";
import Home from "../../home/home/Home";
import Add from "../../loremIpsum/add/Add";
import List from "../../loremIpsum/list/List";
import Page404 from "../page404/Page404";
import { Routes, Route, Navigate } from 'react-router-dom';
function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            {/* <Route path="/" element={<Navigate to="/home" />} /> */}
             <Route path="/login" element={<Login />} />
             <Route path="/signUp" element={<SignUp />} />
            <Route path="/lorem-ipsums/" element={<List />} />
            <Route path="/lorem-ipsums/add" element={<Add />} />
            <Route path="*" element={<Page404 />} />

        </Routes>

    );
}

export default Routing;
