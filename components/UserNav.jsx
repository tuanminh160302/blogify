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

const UserNav = () => {

    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const router = useRouter()
    const { currentUser, uid, userData } = useContext(UserContext)
    const {username, avatarURL} = userData

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
            <Box sx={{ position: 'relative', width: 'fit-content', height: 'fit-content' }}>
                <Avatar className={classes.avatar} alt={username} src={avatarURL} onClick={() => { setOpen(!open) }} />
                {
                    open ?
                        <Box sx={{
                            position: 'absolute',
                            top: '50px',
                            right: '0',
                            width: '300px',
                            height: 'fit-content',
                            background: '#222831',
                            padding: '20px 30px',
                            boxShadow: '0px 0px 15px 5px rgba(0,0,0,0.35)',
                            WebkitBoxShadow: '0px 0px 15px 5px rgba(0,0,0,0.35)',
                            borderRadius: '20px'
                        }}>
                            <div className={classes.nav}>
                                <AccountCircle fontSize='large' color="secondary" />
                                <Link href={{
                                    pathname: '/[username]',
                                    query: { username }
                                }}>
                                    <a onClick={() => { setOpen(false) }}><Typography color="secondary" sx={{ width: 'fit-content', marginLeft: '10px' }}>Profile</Typography></a>
                                </Link>
                            </div>
                            <div className={classes.nav}>
                                <Settings fontSize='large' color="secondary" />
                                <Link href={{
                                    pathname: '/[username]/settings',
                                    query: { username }
                                }}>
                                    <a onClick={() => { setOpen(false) }}><Typography color="secondary" sx={{ width: 'fit-content', marginLeft: '10px' }}>Settings</Typography></a>
                                </Link>
                            </div>
                            <div className={classes.nav}>
                                <PowerSettingsNew fontSize='large' color="secondary" />
                                <Typography color="secondary" sx={{ width: 'fit-content', marginLeft: '10px', cursor: 'pointer' }} onClick={() => { handleSignOut(); setOpen(false) }}>Sign Out</Typography>
                            </div>
                        </Box> : null
                }
            </Box>
        </ClickAwayListener>
    )
}

export default UserNav