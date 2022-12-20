import { combineReducers } from "redux";
import Userreducer from '../Reducer/User';
import TimeReducer from "../Reducer/TimeReducer";
const rootReducer = combineReducers({
    Userreducer ,
    TimeReducer
})

export default rootReducer
