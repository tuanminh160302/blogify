import { Container, Box, Button, Typography, Skeleton } from "@mui/material"
import useStyles from '../../styles/pages-styles/settings.styles'
import { UserContext } from "../../lib/context"
import { useContext } from "react"
import FormInput from "../../components/input"
import useCheckMobile from "../../lib/isMobile"
import { useState } from "react"

const SettingsPage = ({ }) => {
    const classes = useStyles()
    const { currentUser, uid, userData} = useContext(UserContext)
    const { username, avatarURL } = userData
    const isMobile = useCheckMobile()
    const [emailInput, setEmailInput] = useState()
    const [usernameInput, setUsernameInput] = useState()
    const [bioInput, setBioInput] = useState()
    const [websiteInput, setWebsiteInput] = useState()

    const handleInputChange = (e) => {
        e.target.name === 'email' && setEmailInput(e.target.value)
        e.target.name === 'username' && setUsernameInput(e.target.value)
        e.target.name === 'bio' && setBioInput(e.target.value)
        e.target.name === 'website' && setWebsiteInput(e.target.value)
    }

    return (
        <Container className={classes.container} maxWidth='lg' sx={{
            flexDirection: `${isMobile ? 'column' : 'row'}`, justifyContent: `${isMobile ? 'flex-start' : 'space-between'}`,
            alignItems: `${isMobile ? 'center' : 'flex-start'}`,
        }}>
            <Box className={classes.infoBox} sx={{ marginBottom: `${isMobile ? '35px' : '0'}` }}>
                {
                    currentUser ?
                        <Box className={classes.infoBoxElement}>
                            <img className={classes.avatar} src={avatarURL} alt={username} />
                            <Button variant='contained' color='success' sx={{ color: '#f2f2f2' }}>Upload</Button>
                        </Box> :
                        <Box className={classes.infoBoxElement}>
                            <Skeleton variant="circular" animation="wave" width={196} height={196} sx={{ background: 'rgba(0,0,0,.2)' }} />
                            <Skeleton animation="wave" width={100} height={80} sx={{ background: 'rgba(0,0,0,.2)' }} />
                        </Box>
                }
                {
                    currentUser ?
                        <Box className={classes.infoBoxElement} sx={{marginTop: '30px'}}>
                            <Button variant='contained' size='medium' color="success" sx={{
                                textTransform: 'none', color: 'white', width: '100%', marginBottom: '15px'
                            }}>Reset password</Button>
                            <Button variant='contained' size='medium' sx={{
                                textTransform: 'none', color: 'white', background: '#4285f4', width: '100%', marginBottom: '15px'
                            }}>Link Google account</Button>
                            <Button variant='contained' size='medium' sx={{
                                textTransform: 'none', color: 'white', background: '#4267B2', width: '100%'
                            }}>Link Facebook account</Button>
                        </Box> :
                        <Box className={classes.infoBoxElement} sx={{marginTop: '30px'}}>
                            <Skeleton variant='rectangular' animation="wave" width={'100%'} height={40} sx={{ background: 'rgba(0,0,0,.2)', marginBottom: '15px' }} />
                            <Skeleton variant='rectangular' animation="wave" width={'100%'} height={40} sx={{ background: 'rgba(0,0,0,.2)', marginBottom: '15px' }} />
                            <Skeleton variant='rectangular' animation="wave" width={'100%'} height={40} sx={{ background: 'rgba(0,0,0,.2)' }} />
                        </Box>
                }
            </Box>
            <Box className={classes.editBox} sx={{ width: `${isMobile ? '90%' : 'auto'}` }}>
                {
                    currentUser ?
                        <>
                            <Button variant='contained' size='medium' sx={{
                                textTransform: 'none', color: 'white', background: '#D0342C', width: 'fit-content', marginBottom: '15px'
                            }}>Go private</Button>
                            <Box className={classes.editElement}>
                                <Typography className={classes.editTitle} variant="string" color='secondary' sx={{ fontSize: '.7rem', fontWeight: '500' }}>Email</Typography>
                                <FormInput variant='standard' required={false} type='email' fullWidth={true} name='email' placeholder={currentUser.email} onChange={(e) => {handleInputChange(e)}}/>
                            </Box>
                            <Box className={classes.editElement}>
                                <Typography className={classes.editTitle} variant="string" color='secondary' sx={{ fontSize: '.7rem', fontWeight: '500' }}>Username</Typography>
                                <FormInput variant='standard' required={false} type='text' fullWidth={true} name='username' placeholder={username} onChange={(e) => {handleInputChange(e)}}/>
                            </Box>
                            <Box className={classes.editElement}>
                                <Typography className={classes.editTitle} variant="string" color='secondary' sx={{
                                    fontSize: '.7rem', fontWeight: '500', alignSelf: 'flex-start', marginTop: '25px', marginBottom: '8px'
                                }}>Bio</Typography>
                                <textarea name="bio" id="" cols="30" rows="10" onChange={(e) => {handleInputChange(e)}} style={{
                                    background: 'transparent', marginTop: '25px', marginBottom: '8px', resize: 'none', flexGrow: '1', minHeight: '200px', color: '#f2f2f2', padding: '15px 20px',
                                    outline: 'none', border: '1px solid #f2f2f2', fontSize: '.7rem'
                                }}></textarea>
                            </Box>
                            <Box className={classes.editElement}>
                                <Typography className={classes.editTitle} variant="string" color='secondary' sx={{ fontSize: '.7rem', fontWeight: '500' }}>Website</Typography>
                                <FormInput variant='standard' required={false} type='text' fullWidth={true} name='website' onChange={(e) => {handleInputChange(e)}}/>
                            </Box>
                            <Button variant='contained' size='medium' color="success" sx={{
                                textTransform: 'none', color: 'white', width: 'fit-content', marginTop: '30px'
                            }}>Confirm changes</Button>
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