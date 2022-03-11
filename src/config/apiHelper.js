import axios from "axios";

export const USER_API_URL = "http://localhost:5000/api/user";
export const STAFF_API_URL = "http://localhost:5000/api/staff";

export const userApi = axios.create({
	baseURL: USER_API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export const staffApi = axios.create({
	baseURL: STAFF_API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

// Setting the Auth token for every request
userApi.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem('accessToken');
