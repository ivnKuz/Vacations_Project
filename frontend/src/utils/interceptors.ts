import axios from "axios";
import { authStore } from "../redux/authState";

class Interceptors {
    // This interceptor attaches an Authorization header with a Bearer token to every outgoing request made by Axios
    public create():void{
        axios.interceptors.request.use(requestObject => {
            const token = authStore.getState().token;
            //If the token exists, this adds an Authorization header to the request object
            if(token){
                requestObject.headers.Authorization = `Bearer ${token}`;
            }
            return requestObject;
        })
    }
}

const interceptors = new Interceptors();
export default interceptors;