import { createStore, combineReducers, applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import {
	userDetailsReducer,
} from "./state/reducers/userReducer";


const initialState = {
	// user login and authentication details
	userDetails: {
		loading: false,
		error: null,
		accessToken: null,
		user: null,
	},
	// for all results
	userResults: {
		loading: true,
		error: null,
		results: [],
	},
	
};

const middleware = [thunk];

const reducer = combineReducers({
	userDetails: userDetailsReducer,
});

// REDUX PERSIST SETUP
const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export let store = createStore(
	persistedReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export let persistor = persistStore(store);
