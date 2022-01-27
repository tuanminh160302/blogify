import * as React from 'react';
import Link from 'next/link'
import { Box, Button, Container, Avatar } from '@mui/material';
import useStyles from '../styles/components-styles/header.styles'
import MenuIcon from '@mui/icons-material/Menu';
import { UserContext } from '../lib/context';
import { useContext } from 'react';
import UserNav from './UserNav';

const HeaderSM = ({ }) => {
    const classes = useStyles()
    const { currentUser, userData } = useContext(UserContext)
    const {username, avatarURL} = userData

    return (
        <div className={classes.headerSM}>
            <Container className={classes.container}>
                <Link href={{
                    pathname: '/'
                }}>
                    <a className={classes.logo}>Blogify</a>
                </Link>
                {
                    currentUser ? 
                    <UserNav className={classes.menu}/> :
                    <Link href='/login'><a className={classes.menu}><Button variant='contained' color='success' sx={{color: '#f2f2f2', textTransform: 'none'}}>Login</Button></a></Link>
                }
            </Container>
        </div>
    );
}

export default HeaderSM