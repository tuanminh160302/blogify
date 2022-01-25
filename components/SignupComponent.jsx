import { useState } from 'react'
import { Container, Typography, Button } from '@mui/material'
import FormInput from './input'
import useStyles from '../styles/pages-styles/login.styles'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { handleErrorToast, handleSuccessToast } from '../lib/toast'
import { checkUniqueUsername, createUserDocument, auth } from '../lib/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignupComponent = () => {

    const classes = useStyles()
    const router = useRouter()
    const [email, setEmail] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

    const handleInputChange = (e) => {
        e.target.name === 'email' && setEmail(e.target.value)
        e.target.name === 'username' && setUsername(e.target.value)
        e.target.name === 'password' && setPassword(e.target.value)
        e.target.name === 'confirm-password' && setConfirmPassword(e.target.value)
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault()
        const uniqueUsername = await checkUniqueUsername(username)
        if (password !== confirmPassword) {
            handleErrorToast("Passwords don't match")
            console.log(password, confirmPassword)
        } else if (!uniqueUsername) {
            handleErrorToast("Username has been taken")
        } else {
            await createUserWithEmailAndPassword(auth, email, password).then((userCreds) => {
                // Signed In
                const { user } = userCreds
                createUserDocument(user, { email, password, username }).then(() => {
                    handleSuccessToast('Account created')
                    router.push('/')
                })
            }).catch((err) => {
                console.log(err)
            })
        }
    }


    return (
        <div className={classes.container}>
            <form className={classes.form} onSubmit={(e) => { handleSubmitForm(e) }}>
                <Typography variant='string' color='secondary' sx={{ fontWeight: '600', width: 'fit-content', fontSize: '.8rem', color: '#f96d00' }}>Create an account with Blogify</Typography>
                <FormInput variant='standard' label='Email' required={true} type='email' fullWidth={true} name='email' onChange={(e) => { handleInputChange(e) }} />
                <FormInput variant='standard' label='Password' required={true} type='password' fullWidth={true} name='password' onChange={(e) => { handleInputChange(e) }} />
                <FormInput variant='standard' label='Comfirm password' required={true} type='password' fullWidth={true} name='confirm-password' onChange={(e) => { handleInputChange(e) }} />
                <FormInput variant='standard' label='Username' required={true} type='text' fullWidth={true} name='username' onChange={(e) => { handleInputChange(e) }} />
                <Button type='submit' className={classes.button} variant='contained' color='success' size='medium' sx={{
                    textTransform: 'none', color: 'white', alignSelf: 'flex-start', marginTop: '20px'
                }}>Sign up</Button>
                <Link href={'/login'}>
                    <a style={{ width: '100%', marginTop: '15px', fontSize: '.7rem', fontWeight: '400', width: '100%', cursor: 'pointer', color: '#f96d00' }}>
                        Already have an account?
                    </a>
                </Link>
            </form>
        </div>
    )
}

export default SignupComponent