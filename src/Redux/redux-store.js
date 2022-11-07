import {combineReducers, createStore} from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./user-reducer";

let reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   navBarPage: sidebarReducer,
   usersPage: usersReducer,
   auth: authReducer
});

let store = createStore(reducers);

window.store = store;


export default store;