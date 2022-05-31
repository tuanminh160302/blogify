import OpenOverlayTypes from './open-overlay.types'

export const setOpenOverlay = (boolean) => ({
    type: OpenOverlayTypes.OPEN_OVERLAY_TYPES,
    payload: boolean
})