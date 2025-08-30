import { combineReducers } from "redux";
import { toggleReducer } from "../Reducers/DarkReducer";
import orderReducer from "../Reducers/OrderReducer";
import { userReducer } from "../Reducers/UserReducer";

const rootReducer = combineReducers({
    Theme: toggleReducer,
    Order: orderReducer,
    User: userReducer
});

export default rootReducer;
