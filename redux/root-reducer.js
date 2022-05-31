import { combineReducers } from "redux";
import OpenOverlayReducer from "./open-reset/open-overlay.reducer";

export default combineReducers({
    openOverlay: OpenOverlayReducer
})