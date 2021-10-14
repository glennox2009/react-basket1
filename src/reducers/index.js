import counterReducer from "./counter";
import basketReducer from "./basket";
import {combineReducers} from "redux";

const allReducers = combineReducers({
        counterReducer,
        basketReducer
});

export default allReducers;
