import OpenOverlayTypes from './open-overlay.types'

const INITIAL_STATE = {
    openOverlay: false
}

const OpenOverlayReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case OpenOverlayTypes.OPEN_OVERLAY_TYPES:
            return {
                ...state,
                openOverlay: action.payload
            }
        default:
            return state
    }
}

export default OpenOverlayReducer