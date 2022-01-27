import { Container, Box, Button, Typography, Skeleton } from "@mui/material"
import useStyles from '../../styles/pages-styles/settings.styles'
import { UserContext } from "../../lib/context"
import { useContext } from "react"
import FormInput from "../../components/input"

const SettingsPage = ({ }) => {
    const classes = useStyles()
    const { currentUser, uid, username, avatarUrl } = useContext(UserContext)

    return (
        <Container className={classes.container} maxWidth='lg'>
            <Box className={classes.infoBox}>
                {
                    currentUser ?
                        <>
                            <img className={classes.avatar} src={avatarUrl} alt={username} />
                            <Button variant='contained' color='success' sx={{ color: '#f2f2f2' }}>Upload</Button>
                        </> :
                        <>
                            <Skeleton variant="circular" animation="wave" width={196} height={196} sx={{ background: 'rgba(0,0,0,.2)' }} />
                            <Skeleton animation="wave" width={100} height={80} sx={{ background: 'rgba(0,0,0,.2)' }} />
                        </>
                }
            </Box>
            <Box className={classes.editBox}>
                {
                    currentUser ?
                        <>
                            <Button variant='contained' size='medium' sx={{
                                textTransform: 'none', color: 'white', background: '#D0342C', width: 'fit-content', marginBottom: '15px'
                            }}>Go private</Button>
                            <Box className={classes.editElement}>
                                <Typography className={classes.editTitle} variant="string" color='secondary' sx={{ fontSize: '.8rem', fontWeight: '500' }}>Email</Typography>
                                <FormInput variant='standard' required={false} type='email' fullWidth={true} name='email' value={currentUser.email} />
                            </Box>
                            <Box className={classes.editElement}>
                                <Typography className={classes.editTitle} variant="string" color='secondary' sx={{ fontSize: '.8rem', fontWeight: '500' }}>Username</Typography>
                                <FormInput variant='standard' required={false} type='text' fullWidth={true} name='username' value={username} />
                            </Box>
                            <Box className={classes.editElement}>
                                <Typography className={classes.editTitle} variant="string" color='secondary' sx={{
                                    fontSize: '.8rem', fontWeight: '500', alignSelf: 'flex-start', marginTop: '25px', marginBottom: '8px'
                                }}>Bio</Typography>
                                {/* <FormInput variant='standard' required={false} type='text' fullWidth={true} name='bio' /> */}
                                <textarea name="" id="" cols="30" rows="10" style={{
                                    background: 'transparent', marginTop: '25px', marginBottom: '8px', resize: 'none', flexGrow: '1', minHeight: '200px', color: '#f2f2f2', padding: '15px 20px',
                                    outline: 'none', border: '1px solid #f2f2f2'
                                }}></textarea>
                            </Box>
                            <Box className={classes.editElement}>
                                <Typography className={classes.editTitle} variant="string" color='secondary' sx={{ fontSize: '.8rem', fontWeight: '500' }}>Website</Typography>
                                <FormInput variant='standard' required={false} type='text' fullWidth={true} name='website' />
                            </Box>
                            <Button variant='contained' size='medium' color="success" sx={{
                                textTransform: 'none', color: 'white', width: 'fit-content', marginBottom: '15px', marginTop: '30px'
                            }}>Reset password</Button>
                            <Button variant='contained' size='medium' sx={{
                                textTransform: 'none', color: 'white', background: '#4285f4', width: 'fit-content', marginBottom: '15px'
                            }}>Link Google account</Button>
                            <Button variant='contained' size='medium' sx={{
                                textTransform: 'none', color: 'white', background: '#4267B2', width: 'fit-content', marginBottom: '15px'
                            }}>Link Facebook account</Button>
                        </>
                        : <>
                            <Skeleton animation="wave" width={120} height={80} sx={{ background: 'rgba(0,0,0,.2)' }} />
                            <Skeleton animation="wave" width={'100%'} height={40} sx={{ background: 'rgba(0,0,0,.2)' }} />
                            <Skeleton animation="wave" width={'100%'} height={40} sx={{ background: 'rgba(0,0,0,.2)' }} />
                            <Skeleton animation="wave" width={'100%'} height={40} sx={{ background: 'rgba(0,0,0,.2)' }} />
                            <Skeleton animation="wave" width={'100%'} height={40} sx={{ background: 'rgba(0,0,0,.2)', marginBottom: '15px' }} />
                            <Skeleton variant="rectangular" animation="wave" width={'100%'} height={300} sx={{ background: 'rgba(0,0,0,.2)' }} />
                            <Skeleton animation="wave" width={120} height={80} sx={{ background: 'rgba(0,0,0,.2)' }} />
                        </>
                }
            </Box>
        </Container>
    )
}

export default SettingsPage