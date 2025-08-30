
import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_LOGOUT, GET_USER_SUCCESS, GET_USER_FAILURE } from "../Constant";
import { toast } from "react-toastify";
const userApi = import.meta.env.VITE_API;


// user login function 
export const userLogin = (email: string, password: string) => async (dispatch: any) => {
    try {
        const response = await fetch(`${userApi}/api/v1/user/loginuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (!response.ok) {
            return toast.error(data.message || "Login failed");

        };
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        toast.success(data.message || "Login successful");
    } catch (error) {
        dispatch({ type: USER_LOGIN_FAILURE, payload: error instanceof Error ? error.message : "Unknown error" });
    }
};

// logout user function 
export const logoutUser = () => async (dispatch: any) => {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            return toast("User token not available");
        };
        const response = await fetch(`${userApi}/api/v1/user/logoutuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            credentials: "include",
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || "Logout failed");
        };
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        dispatch({ type: USER_LOGOUT });
        toast.success(data.message || "Logout successful");
    } catch (error) {
        toast(error instanceof Error ? error.message : "Unknown error");
    }
};


// get user profile 
export const getUser = () => async (dispatch: any) => {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            toast("User token not available");
            return;
        };
        const response = await fetch(`${userApi}/api/v1/user/getuserprofile`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            credentials: 'include'
        });
        const data = await response.json();
        if (!response.ok) {
            return toast(data.message || "Get user failed");
        }
        dispatch({ type: GET_USER_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({ type: GET_USER_FAILURE, payload: error instanceof Error ? error.message : "Unknown error" });
    }
};
