import {combineReducers } from "redux";
import { FetchList} from "./fetchlist";

const reducers = combineReducers({ postList: FetchList} );
export default reducers; 