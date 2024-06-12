import axios from "axios";
import { AuthAction, AuthActionType, authStore } from "../redux/authState";

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
    public handleTokenExpired = () => {
        axios.interceptors.response.use(
            (response) => {
                // If the response is successful, just return it
                return response;
            },
            (error) => {
                    // Check if the error is related to token expiration
                    if (error.response && error.response.status === 401) {
                        const errorMessage = error.response.data?.message || error.response.data?.error || '';
                        if (errorMessage.toLowerCase().includes('token expired')) {
                            // Remove the token from local storage
                            localStorage.removeItem('token');
                            // Dispatch a logout action
                            const action: AuthAction = {
                                type: AuthActionType.Logout,
                                payload: null,
                            };
                            authStore.dispatch(action);
                        }
                    }
                
                // Reject the promise to pass the error to the caller
                return Promise.reject(error);
            }
        );
    };

}

const interceptors = new Interceptors();
export default interceptors;