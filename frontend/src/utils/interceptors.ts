import axios from "axios";
import { AuthAction, AuthActionType, authStore } from "../redux/authState";

class Interceptors {
    public setupInterceptors(): void {
        // Request Interceptor
        axios.interceptors.request.use(requestObject => {
            const token = authStore.getState().token;
            if (token) {
                requestObject.headers.Authorization = `Bearer ${token}`;
            }
            return requestObject;
        });

        axios.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                if (!error.response) {
                    // Handle network errors or other errors where no response was received
                    console.error("Network error or no response received:", error);
                    return Promise.reject(error);
                }
        
                const errorMessage = error.response.data?.message || error.response.data?.error || '';
                if (error.response.status === 401 && errorMessage.toLowerCase().includes('token expired')) {
                    // Remove the token from local storage and dispatch a logout action
                    localStorage.removeItem('token');
                    const action: AuthAction = {
                        type: AuthActionType.Logout,
                        payload: null
                    };
                    authStore.dispatch(action);
                }
                return Promise.reject(error);
            }
        );
    }
}

const interceptors = new Interceptors();
export default interceptors;


