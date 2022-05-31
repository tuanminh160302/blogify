import { Container, Box, Typography, Modal } from '@mui/material'
import { setOpenOverlay } from '../redux/open-reset/open-overlay.actions'
import { connect } from 'react-redux'

const OverlayBox = ({ purpose, content, openOverlay, setOpenOverlay }) => {

    return (
        <Modal sx={{display:'flex', justifyContent:'center', alignItems:'center'}} open={openOverlay} onClose={() => { setOpenOverlay(false) }}>
            {content}
        </Modal>
    )
}

const mapStateToProps = ({ openOverlay }) => ({
    openOverlay: openOverlay.openOverlay
})

const mapDispatchToProps = (dispatch) => ({
    setOpenOverlay: (boolean) => { dispatch(setOpenOverlay(boolean)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(OverlayBox);