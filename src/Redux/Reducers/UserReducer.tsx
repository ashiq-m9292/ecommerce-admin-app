import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_LOGOUT, GET_USER_SUCCESS, GET_USER_FAILURE } from "../Constant";


const initialState = {
    userInfo: null,
    loading: true,
    error: null,
    token: localStorage.getItem("token"),
    role: localStorage.getItem("role"),
};

export const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                userInfo: action.payload,
                token: action.payload.token,
                role: action.payload.role,
                loading: false,
                error: null,
            };
        case USER_LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case USER_LOGOUT:
            return {
                ...state,
                userInfo: null,
                token: null,
                role: null,
                loading: false,
                error: null,
            };
        case GET_USER_SUCCESS:
            return {
                ...state,
                userInfo: action.payload,
                loading: false,
                error: null,
            };
        case GET_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};