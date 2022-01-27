import { useState } from "react";
import { Modal, Typography, Button } from '@mui/material'
import { makeStyles } from "@mui/styles";
import FormInput from "./input";
import { connect } from "react-redux";
import { setOpenReset } from '../redux/open-reset/open-reset.actions'
import { auth } from "../lib/firebase";
import { updatePassword, sendPasswordResetEmail } from "firebase/auth";
import { handleErrorToast, handleSuccessToast } from "../lib/toast";

const useStyles = makeStyles({
    box: {
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
    }
})

const ResetPasswordModal = ({ openReset, setOpenReset }) => {

    const [email, setEmail] = useState()
    // const [password, setPassword] = useState()
    // const [confirmPassword, setConfirmPassword] = useState()
    const classes = useStyles()

    const handleInputChange = (e) => {
        e.target.name === 'email' && setEmail(e.target.value)
        // e.target.name === 'password' && setPassword(e.target.value)
        // e.target.name === 'confirm-password' && setConfirmPassword(e.target.value)
    }

    const handleResetPassword = (e) => {
        e.preventDefault()

        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                handleSuccessToast("Email verification sent")
                setOpenReset(false)
                // ..
            })
            .catch((err) => {
                console.log(err.code)
                err.code === 'auth/user-not-found' && handleErrorToast("User not found")
                // ..
            });
    }

    return (
        <Modal open={openReset} onClose={() => { setOpenReset(false) }} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <form className={classes.box} onSubmit={(e) => { handleResetPassword(e) }}>
                <Typography variant='string' sx={{ fontSize: '.8rem', fontWeight: '600', color: '#f96d00' }}>Reset your password</Typography>
                <FormInput variant='standard' label='Email' required={true} type='email' fullWidth={true} name='email' onChange={(e) => { handleInputChange(e) }} />
                {/* <FormInput variant='standard' label='Password' required={true} type='password' fullWidth={true} name='password' onChange={(e) => { handleInputChange(e) }} />
                <FormInput variant='standard' label='Confirm password' required={true} type='password' fullWidth={true} name='confirm-password' onChange={(e) => { handleInputChange(e) }} /> */}
                <Button variant='contained' color='secondary' size='medium' onClick={() => { setOpenReset(false) }} sx={{
                    textTransform: 'none', color: '#222831', marginTop: '20px'
                }}>Cancel</Button>
                <Button type='submit' className={classes.button} variant='contained' color='success' size='medium' sx={{
                    textTransform: 'none', color: 'white', marginTop: '20px'
                }}>Reset</Button>
            </form>
        </Modal>
    )
}

const mapStateToProps = ({ openReset }) => ({
    openReset: openReset.openReset
})

const mapDispatchToProps = (dispatch) => ({
    setOpenReset: (boolean) => { dispatch(setOpenReset(boolean)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordModal)