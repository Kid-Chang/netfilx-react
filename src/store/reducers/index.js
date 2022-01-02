import { combineReducers } from "redux";
import HomeReducer from "./home";
import ModalReducer from "./login";
import WishReducer from "./wish";
const RootReducer = combineReducers({
    HomeReducer,
    ModalReducer,
    WishReducer,
});

export default RootReducer;
