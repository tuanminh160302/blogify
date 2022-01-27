import Link from 'next/link'
import { Box, Container, Button, Avatar, ClickAwayListener, Typography } from '@mui/material'
import useStyles from '../styles/components-styles/header.styles'
import UserNav from './UserNav'
import { UserContext } from '../lib/context'
import { useContext } from 'react'

const HeaderXL = () => {

    const classes = useStyles()
    const { currentUser, userData } = useContext(UserContext)
    const { username, avatarURL } = userData

    return (
        <div className={classes.header}>
            <Container className={classes.container} maxWidth='lg'>
                <Link href={{
                    pathname: '/'
                }}>
                    <a className={classes.logo}>Blogify</a>
                </Link>
                <Box className={classes.box} sw={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <Link href={{
                        pathname: '/'
                    }}>
                        <a className={classes.link}>Home</a>
                    </Link>
                    <Link href={{
                        pathname: '/feed'
                    }}>
                        <a className={classes.link}>Feed</a>
                    </Link>
                    <Link href={{
                        pathname: '/'
                    }}>
                        <a className={classes.link}>Write</a>
                    </Link>
                    <Link href={{
                        pathname: '/news'
                    }}>
                        <a className={classes.link}>News</a>
                    </Link>
                    {
                        !currentUser ?
                            <Link href={{
                                pathname: '/login'
                            }}>
                                <a><Button className={classes.button} variant='contained' color='secondary'>Log in</Button></a>
                            </Link> :
                            <UserNav/>
                    }
                </Box>
            </Container>
        </div>
    )
}

export default HeaderXL