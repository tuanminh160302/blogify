import { Container } from '@mui/material'
import LoginComponent from '../components/LoginComponent'
import SignupComponent from '../components/SignupComponent'
import checkMobile from '../lib/isMobile'
import AlreadySignedIn from '../components/AlreadySignedIn'
import { UserContext} from '../lib/context'
import { useContext } from 'react'

const SignupPage = () => {

    const {currentUser, uid, username, avatarUrl} = useContext(UserContext)
    const isMobile = checkMobile()

    return (
        <Container sx={{ maxWidth: 'lg', display: 'flex', flexDirection: `${isMobile ? 'column' : 'row'}`, 
        alignItems: `${isMobile ? 'center' : 'flex-start'}`, justifyContent: `${isMobile ? 'flex-start' : 'center'}`, paddingTop: '75px' }}>
            {
                !currentUser ? <SignupComponent /> : <AlreadySignedIn />
            }
        </Container>
    )
}

export default SignupPage