import { combineReducers } from "redux";
import OpenResetReducer from "./open-reset/open-reset.reducer";

export default combineReducers({
    openReset: OpenResetReducer
})