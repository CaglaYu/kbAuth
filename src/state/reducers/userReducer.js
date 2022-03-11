import jwtDecode from 'jwt-decode';

import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
} from "../types/userTypes";
function getPayload(jwt){
    // A JWT has 3 parts separated by '.'
    // The middle part is a base64 encoded JSON
    // decode the base64 
    try{
    const decoded = jwtDecode(jwt);
    return decoded;
    }
 catch (error) {
    console.log( error);
  }
  }
  
// handling user details state changes
export const userDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                loading: true,
            };
        case USER_LOGIN_SUCCESS:
            
            const payload = getPayload(action.payload.accessToken);
            let myDate = Math.floor(Date.now());
            
            
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
