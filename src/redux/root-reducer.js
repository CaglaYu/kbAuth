import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user-reducer";
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'  
const persistConfig={
    key:'root', // key meaning at what point inside of our reducer object do we want to start store everything and we start from the root
    storage
}
const rootReducer= combineReducers({
      user:userReducer,
      cart:cartReducer,
      directory:directoryReducer,
      shop:shopReducer,
  })
 export default persistReducer(persistConfig,rootReducer) // it will return us the modified version of the rootReducer with persistence capabilities