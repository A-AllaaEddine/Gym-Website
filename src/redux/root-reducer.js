import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import directoryReducer from "./directory/directory.reducer";
import subReducer from "./sub/sub.reducer";



const rootReducer = combineReducers({
    user: userReducer,
    directory: directoryReducer,
    subscription: subReducer
})

export default rootReducer;