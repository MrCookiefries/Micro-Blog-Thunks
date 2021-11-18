import { combineReducers } from "redux";
import blogs from "./reducers/blogs";

const rootReducer = combineReducers({ blogs });

export default rootReducer;
