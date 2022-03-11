import { userApi } from "../../config/apiHelper";

import {
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAIL,
	USER_LOGOUT,
	GET_RESULTS_REQUEST,
	GET_RESULTS_SUCCESS,
	GET_RESULTS_FAIL,
} from "../types/userTypes";

// logging in
export const login = (email, password) => async (dispatch) => {
	try {
		dispatch({
			type: USER_LOGIN_REQUEST,
		});

		const { data } = await userApi.post("/login", {
			email,
			password,
		});

		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: USER_LOGIN_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};


export const logout = () => (dispatch) => {
	try {
		localStorage.removeItem("_expiredTime");
		userApi.defaults.headers.common["Authorization"] = null;
		
		dispatch({
			type: USER_LOGOUT,
		});
		
	} catch (error) {
		console.log(error);
	}
};

// getting user
export const getResults = (email) => async (dispatch) => {
	try {
		dispatch({
			type: GET_RESULTS_REQUEST,
		});

		const { data } = await userApi.get(`/findUser/${email}`);
		if (data.email) {
			dispatch({
				type: GET_RESULTS_SUCCESS,
				payload: data.email,
			});
		}
	} catch (error) {
		dispatch({
			type: GET_RESULTS_FAIL,
			payload: error.response.data.message,
		});
	}
};
