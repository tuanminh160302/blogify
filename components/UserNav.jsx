import { ClickAwayListener, Box, Avatar, Typography } from '@mui/material'
import { UserContext } from '../lib/context'
import { useContext } from 'react'
import useStyles from '../styles/components-styles/header.styles'
import { PowerSettingsNew, AccountCircle, Settings } from '@mui/icons-material'
import Link from 'next/link'
import { useState } from 'react'
import { auth } from '../lib/firebase'
import { signOut } from 'firebase/auth'
import { handleSuccessToast } from '../lib/toast'
import { useRouter } from 'next/router'
import useCheckMobile from '../lib/isMobile'

const UserNav = ({ className }) => {

    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const isMobile = useCheckMobile()
    const router = useRouter()
    const { currentUser, uid, userData } = useContext(UserContext)
    const { username, avatarURL } = userData

    const handleSignOut = async () => {
        await signOut(auth).then(() => {
            // Sign-out successful.
            handleSuccessToast('Successfully signed out')
        }).catch((error) => {
            // An error happened.
            handleSuccessToast('Error! Cannot sign out')
        });
        router.push('/login')
    }

    return (
        <ClickAwayListener onClickAway={() => { setOpen(false) }}>
            <Box className={className} sx={{ position: 'relative', width: 'fit-content', height: 'fit-content' }}>
                <Avatar className={classes.avatar} alt={username} src={avatarURL} onClick={() => { setOpen(!open) }} />
                {
                    open ?
                        <Box sx={{
                            position: 'absolute',
                            top: '50px',
                            right: '0',
                            width: `${isMobile ? '200px' : '300px'}`,
                            height: 'fit-content',
                            background: '#222831',
                            padding: '20px 30px',
                            boxShadow: '0px 0px 15px 5px rgba(0,0,0,0.35)',
                            WebkitBoxShadow: '0px 0px 15px 5px rgba(0,0,0,0.35)',
                            borderRadius: '20px',
                            zIndex: '99999999999',
                        }}>
                            <div className={classes.nav}>
                                <AccountCircle fontSize='medium' color="secondary" />
                                <Link href={{
                                    pathname: '/[username]',
                                    query: { username }
                                }}>
                                    <a onClick={() => { setOpen(false) }}><Typography color="secondary" sx={{
                                        width: 'fit-content', marginLeft: '10px', fontSize: '.8rem',
                                    }}>Profile</Typography></a>
                                </Link>
                            </div>
                            <div className={classes.nav}>
                                <Settings fontSize='medium' color="secondary" />
                                <Link href={{
                                    pathname: '/accounts/settings',
                                }}>
                                    <a onClick={() => { setOpen(false) }}><Typography color="secondary" sx={{
                                        width: 'fit-content', marginLeft: '10px', fontSize: '.8rem',
                                    }}>Settings</Typography></a>
                                </Link>
                            </div>
                            <div className={classes.nav}>
                                <PowerSettingsNew fontSize='medium' color="secondary" />
                                <Typography color="secondary" sx={{
                                    width: 'fit-content', marginLeft: '10px', cursor: 'pointer', fontSize: '.8rem',
                                }} onClick={() => { handleSignOut(); setOpen(false) }}>Sign Out</Typography>
                            </div>
                        </Box> : null
                }
            </Box>
        </ClickAwayListener>
    )
}

export default UserNav