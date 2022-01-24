import { useState } from 'react'
import { Container, Typography } from '@mui/material'
import LoginComponent from '../components/LoginComponent'
import SignupComponent from '../components/SignupComponent'
import checkMobile from '../lib/isMobile'

const LoginPage = () => {

    const isMobile = checkMobile()

    return (
        <Container sx={{ maxWidth: 'lg', display: 'flex', flexDirection: `${isMobile ? 'column' : 'row'}`, 
        alignItems: `${isMobile ? 'center' : 'flex-start'}`, justifyContent: `${isMobile ? 'flex-start' : 'center'}`, paddingTop: '75px' }}>
            <LoginComponent/>
            <SignupComponent />
        </Container>
    )
}

export default LoginPage