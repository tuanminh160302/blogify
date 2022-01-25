import OpenResetTypes from './open-reset.types'

const INITIAL_STATE = {
    openReset: false
}

const OpenResetReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case OpenResetTypes.OPEN_RESET_TYPES:
            return {
                ...state,
                openReset: action.payload
            }
        default:
            return state
    }
}

export default OpenResetReducer