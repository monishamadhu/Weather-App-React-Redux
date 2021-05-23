import { combineReducers } from "redux";
import weatherInfo from "./weatherReducer";

//combine reducers
export const reducers = combineReducers({
    weatherInfo: weatherInfo
});

export default reducers;