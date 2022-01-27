import { useState } from 'react'
import { Container, Typography } from '@mui/material'
import LoginComponent from '../components/LoginComponent'
import AlreadySignedIn from '../components/AlreadySignedIn'
import { UserContext } from '../lib/context'
import { useContext } from 'react'

const LoginPage = () => {

    const {currentUser, uid, userData} = useContext(UserContext)

    return (
        <Container sx={{ maxWidth: 'lg', display: 'flex', justifyContent: 'center', paddingTop: '75px' }}>
            {!currentUser ? <LoginComponent /> : <AlreadySignedIn />}
        </Container>
    )
}

export default LoginPage