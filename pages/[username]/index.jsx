import { Container, Box, Button } from "@mui/material"
import { useRouter } from "next/router"
import { UserContext } from "../../lib/context"
import { useContext } from "react"
import useStyles from "../../styles/pages-styles/profile.styles"


const UserProfilePage = () => {
    const classes = useStyles()
    const router = useRouter()
    const { currentUser, uid, userData } = useContext(UserContext)
    const { username, avatarURL, bio, website, isPrivate, ggConnected } = userData

    return (
        <Container maxWidth='lg' className={classes.container}>
            <Box className={classes.infoBox}>
                 <img className={classes.avatar} src={avatarURL} alt={username} />
                 <Button variant='contained' color='success' sx={{ color: '#f2f2f2', textTransform: 'none' }}>Create Post</Button>
            </Box>
            <Box className={classes.postBox}></Box>
        </Container>
    )
}

export default UserProfilePage