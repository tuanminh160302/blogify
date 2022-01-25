import { Container, Typography, Button } from '@mui/material'
import FormInput from './input'
import useStyles from '../styles/pages-styles/login.styles'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { auth } from '../lib/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { handleErrorToast, handleSuccessToast } from '../lib/toast'
import { signInWithGoogle } from '../lib/firebase'
import ResetPasswordModal from './resetPasswordModal'
import { connect } from 'react-redux'
import { setOpenReset } from '../redux/open-reset/open-reset.actions'

const LoginComponent = ({openReset, setOpenReset}) => {

    const classes = useStyles()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const router = useRouter()

    const handleInputChange = (e) => {
        e.target.name === 'l-email' && setEmail(e.target.value)
        e.target.name === 'l-password' && setPassword(e.target.value)
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

    return (
        <div className={classes.container}>
            <form className={classes.form} onSubmit={(e) => { handleSubmitForm(e) }}>
                <Typography variant='string' sx={{ fontWeight: '600', width: 'fit-content', fontSize: '.8rem', color: '#f96d00' }}>Login to your account</Typography>
                <FormInput variant='standard' label='Email' required={true} type='email' fullWidth={true} name='l-email' onChange={(e) => {handleInputChange(e)}}/>
                <FormInput variant='standard' label='Password' required={true} type='password' fullWidth={true} name='l-password' onChange={(e) => {handleInputChange(e)}}/>
                <Button type='submit' className={classes.button} variant='contained' color='success' size='medium' sx={{
                    textTransform: 'none', color: 'white', marginTop: '20px', width: '100%'
                }}>Log in</Button>
                <Button className={classes.button} variant='contained' size='medium' onClick={() => {handleGoogleSignIn()}} sx={{
                    textTransform: 'none', color: 'white', marginTop: '20px', background: '#4285f4', width: '100%'
                }}>Sign in with Google</Button>
                <Typography variant='string' color='secondary' sx={{ fontWeight: '400', width: '100%', fontSize: '.7rem', cursor: 'pointer', marginTop: '15px' }} 
                            onClick={() => {setOpenReset(true)}}>Forgot password?</Typography>
                <Link href={'/signup'}>
                    <a style={{ width: '100%', marginTop: '15px', fontSize: '.7rem', fontWeight: '400', width: '100%', cursor: 'pointer', color: '#f96d00' }}>
                        Create an account instead
                    </a>
                </Link>
            </form>
            <ResetPasswordModal open={openReset}/>
        </div>
    )
}

const mapStateToProps = ({openReset}) => ({
    openReset: openReset.openReset
})

const mapDispatchToProps = (dispatch) => ({
    setOpenReset: (boolean) => {dispatch(setOpenReset(boolean))}
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)