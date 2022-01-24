import { Container, Typography, Button } from '@mui/material'
import FormInput from './input'
import useStyles from '../styles/pages-styles/login.styles'

const SignupComponent = () => {

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <form className={classes.form}>
                <Typography variant='string' color='secondary' sx={{ fontWeight: '600', width: 'fit-content', fontSize: '.8rem' }}>Create an account with Blogify</Typography>
                <FormInput variant='standard' label='Email' required={true} type='email' fullWidth={true} name='email' />
                <FormInput variant='standard' label='Password' required={true} type='password' fullWidth={true} name='password' />
                <FormInput variant='standard' label='Comfirm password' required={true} type='password' fullWidth={true} name='comfirm-password' />
                <FormInput variant='standard' label='Username' required={true} type='text' fullWidth={true} name='username' />
                <Button className={classes.button} variant='contained' color='success' size='medium' sx={{
                    textTransform: 'none', color: 'white', alignSelf: 'flex-start', marginTop: '20px'
                }}>Sign up</Button>
            </form>
        </div>
    )
}

export default SignupComponent