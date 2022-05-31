import { Container, Box, Button, Typography } from "@mui/material"
import { useRouter } from "next/router"
import { UserContext } from "../../lib/context"
import { useContext, useState } from "react"
import OverlayBox from "../../components/OverlayBox"
import useStyles from "../../styles/pages-styles/profile.styles"
import { setOpenOverlay } from "../../redux/open-reset/open-overlay.actions"
import { connect } from "react-redux"
import useCheckMobile from "../../lib/isMobile"
import TextArea from "../../components/TextArea"


const UserProfilePage = ({openOverlay, setOpenOverlay}) => {
    const classes = useStyles()
    const router = useRouter()
    const isMobile = useCheckMobile()
    const { currentUser, uid, userData } = useContext(UserContext)
    const { username, avatarURL, bio, website, isPrivate, ggConnected } = userData

    const handleCreatePost = () => {
        setOpenOverlay(true)
    }

    return (
        <Container maxWidth='lg' className={classes.container}>
            {openOverlay ? <OverlayBox content={<Box sx={{
                height: '80vh',
                width: `${isMobile ? '85%' : '45%'}`,
                background: '#222831',
                boxShadow: '0px 0px 15px 5px rgb(0 0 0 / 35%)',
                WebkitBoxShadow: '0px 0px 15px 5px rgb(0 0 0 / 35%)',
                borderRadius: '30px',
            }}>
                <Box sx={{ width: '100%', height: 'fit-content', padding: '20px 50px', display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid white' }}>
                    <Typography variant='string' sx={{ fontWeight: '600', width: 'fit-content', fontSize: '1.2rem', color: '#f96d00' }}>Create post</Typography>
                </Box>
                <Box sx={{ width: '100%', height: 'fit-content', padding: '20px 50px', display: 'flex', flexDirection: 'column' }}>
                    <TextArea placeholder={'Write something here...'} minRows={8}/>
                </Box>
            </Box>}/> : null}
            <Box className={classes.infoBox}>
                <img className={classes.avatar} src={avatarURL} alt={username} />
                <Button variant='contained' color='success' sx={{ color: '#f2f2f2', textTransform: 'none' }} onClick={() => handleCreatePost()}>Create Post</Button>
            </Box>
            <Box className={classes.postBox}></Box>
        </Container>
    )
}

const mapStateToProps = (openOverlay) => ({
    openOverlay: openOverlay.openOverlay
})

const mapDispatchToProps = (dispatch) => ({
    setOpenOverlay: (boolean) => {dispatch(setOpenOverlay(boolean))}
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfilePage)