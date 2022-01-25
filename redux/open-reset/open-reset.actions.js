import OpenResetTypes from './open-reset.types'

export const setOpenReset = (boolean) => ({
    type: OpenResetTypes.OPEN_RESET_TYPES,
    payload: boolean
})