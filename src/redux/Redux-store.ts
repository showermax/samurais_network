import {combineReducers, createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";


let reducers = combineReducers({
    profileReducer,
   dialogsPage: dialogsReducer
});
let store = createStore(reducers);

export type StoreType = typeof store
export default store;