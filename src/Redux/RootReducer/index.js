import { combineReducers } from "redux";
import Userreducer from '../Reducer/User';
import TimeReducer from "../Reducer/TimeReducer";
import ThemeReducer from "../Reducer/ThemeReducer";

const rootReducer = combineReducers({
    Userreducer ,
    TimeReducer ,
    ThemeReducer
})

export default rootReducer
