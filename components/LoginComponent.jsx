import { Container, Typography, Button } from '@mui/material'
import FormInput from './FormInput'
import useStyles from '../styles/pages-styles/login.styles'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { auth } from '../lib/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { handleErrorToast, handleSuccessToast } from '../lib/toast'
import { signInWithGoogle } from '../lib/firebase'
import { sendPasswordResetEmail } from 'firebase/auth'
import { connect } from 'react-redux'
import { setOpenOverlay } from '../redux/open-reset/open-overlay.actions'
import OverlayBox from './OverlayBox'

const LoginComponent = ({ openOverlay, setOpenOverlay }) => {

    const classes = useStyles()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [resetEmail, setResetEmail] = useState()
    const router = useRouter()

    const handleInputChange = (e) => {
        e.target.name === 'l-email' && setEmail(e.target.value)
        e.target.name === 'l-password' && setPassword(e.target.value)
        e.target.name === 'resetEmail' && setResetEmail(e.target.value)
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                router.push('/')
                handleSuccessToast('Sign in successfully')
                // ...
            })
            .catch((err) => {
                console.log(err.code)
                if (err.code === 'auth/wrong-password') {
                    handleErrorToast('Wrong password')
                } else if (err.code === 'auth/user-not-found') {
                    handleErrorToast('User not found')
                }
            });
    }

    const handleGoogleSignIn = () => {
        router.push('/')
        signInWithGoogle()
    }

    const handleResetPassword = (e) => {
        e.preventDefault()

        sendPasswordResetEmail(auth, resetEmail)
            .then(() => {
                // Password reset email sent!
                handleSuccessToast("Email verification sent")
                setOpenOverlay(false)
                // ..
            })
            .catch((err) => {
                console.log(err.code)
                err.code === 'auth/user-not-found' && handleErrorToast("User not found")
                // ..
            });
    }

    return (
        <div className={classes.container}>
            <form className={classes.form} onSubmit={(e) => { handleSubmitForm(e) }}>
                <Typography variant='string' sx={{ fontWeight: '600', width: 'fit-content', fontSize: '.8rem', color: '#f96d00' }}>Login to your account</Typography>
                <FormInput variant='standard' label='Email' required={true} type='email' fullWidth={true} name='l-email' onChange={(e) => { handleInputChange(e) }} />
                <FormInput variant='standard' label='Password' required={true} type='password' fullWidth={true} name='l-password' onChange={(e) => { handleInputChange(e) }} />
                <Button type='submit' className={classes.button} variant='contained' color='success' size='medium' sx={{
                    textTransform: 'none', color: 'white', marginTop: '20px', width: '100%'
                }}>Log in</Button>
                <Button className={classes.button} variant='contained' size='medium' onClick={() => { handleGoogleSignIn() }} sx={{
                    textTransform: 'none', color: 'white', marginTop: '20px', background: '#4285f4', width: '100%'
                }}>Sign in with Google</Button>
                <Typography variant='string' color='secondary' sx={{ fontWeight: '400', width: '100%', fontSize: '.7rem', cursor: 'pointer', marginTop: '15px' }}
                    onClick={() => { setOpenOverlay(true) }}>Forgot password?</Typography>
                <Link href={'/signup'}>
                    <a style={{ width: '100%', marginTop: '15px', fontSize: '.7rem', fontWeight: '400', width: '100%', cursor: 'pointer', color: '#f96d00' }}>
                        Create an account instead
                    </a>
                </Link>
            </form>
            <OverlayBox content={<form style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '300px',
                display: 'flex',
                flexDirection: 'column',
                background: '#222831',
                outline: 'none',
                padding: '30px',
                boxShadow: '0px 0px 15px 5px rgb(0 0 0 / 35%)',
                WebkitBoxShadow: '0px 0px 15px 5px rgb(0 0 0 / 35%)',
                borderRadius: '10px',
            }} onSubmit={(e) => { handleResetPassword(e) }}>
                <Typography variant='string' sx={{ fontSize: '.8rem', fontWeight: '600', color: '#f96d00' }}>Reset your password</Typography>
                <FormInput variant='standard' label='Email' required={true} type='email' fullWidth={true} name='resetEmail' onChange={(e) => { handleInputChange(e) }} />
                {/* <FormInput variant='standard' label='Password' required={true} type='password' fullWidth={true} name='password' onChange={(e) => { handleInputChange(e) }} />
                <FormInput variant='standard' label='Confirm password' required={true} type='password' fullWidth={true} name='confirm-password' onChange={(e) => { handleInputChange(e) }} /> */}
                <Button variant='contained' color='secondary' size='medium' onClick={() => { setOpenOverlay(false) }} sx={{
                    textTransform: 'none', color: '#222831', marginTop: '20px'
                }}>Cancel</Button>
                <Button type='submit' variant='contained' color='success' size='medium' sx={{
                    textTransform: 'none', color: 'white', marginTop: '20px'
                }}>Reset</Button>
            </form>} />
        </div>
    )
}

const mapStateToProps = ({ openOverlay }) => ({
    openOverlay: openOverlay.openOverlay
})

const mapDispatchToProps = (dispatch) => ({
    setOpenOverlay: (boolean) => { dispatch(setOpenOverlay(boolean)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)