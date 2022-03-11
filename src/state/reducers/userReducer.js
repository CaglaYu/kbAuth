import {
    GET_RESULTS_FAIL,
    GET_RESULTS_REQUEST,
    GET_RESULTS_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
} from "../types/userTypes";

// handling user details state changes
export const userDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                loading: true,
            };
        case USER_LOGIN_SUCCESS:
            return {
                loading: false,
                accessToken: action.payload.accessToken,
                user: action.payload.user,
            };
        case USER_LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case USER_LOGOUT:
            
            return {
                loading: false,
                accessToken: null,
                user: null,
            };
        default:
            return state;
    }
};
