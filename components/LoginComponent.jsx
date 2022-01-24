import { Container, Typography, Button } from '@mui/material'
import FormInput from './input'
import useStyles from '../styles/pages-styles/login.styles'
import checkMobile from '../lib/isMobile'

const LoginComponent = () => {

    const classes = useStyles()
    const isMobile = checkMobile()

    return (
        <div className={classes.container} style={{marginRight: `${isMobile ? '0' : '75px'}`, marginBottom: `${isMobile ? '45px' : '0'}`}}>
            <form className={classes.form}>
                <Typography variant='string' color='secondary' sx={{ fontWeight: '600', width: 'fit-content', fontSize: '.8rem' }}>Login to your account</Typography>
                <FormInput variant='standard' label='Email' required={true} type='email' fullWidth={true} name='l-email' />
                <FormInput variant='standard' label='Password' required={true} type='password' fullWidth={true} name='l-password' />
                <Button className={classes.button} variant='contained' color='success' size='medium' sx={{
                    textTransform: 'none', color: 'white', alignSelf: 'flex-start', marginTop: '20px'
                }}>Log in</Button>
                <Button className={classes.button} variant='contained' size='medium' sx={{
                    textTransform: 'none', color: 'white', alignSelf: 'flex-start', marginTop: '20px', background: '#4285f4'
                }}>Sign in with Google</Button>
                <Typography variant='string' color='secondary' sx={{ fontWeight: '400', width: '100%', fontSize: '.7rem', cursor: 'pointer', marginTop: '15px' }}>Forgot password?</Typography>
            </form>
        </div>
    )
}

export default LoginComponent