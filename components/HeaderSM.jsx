import * as React from 'react';
import Link from 'next/link'
import { Box, Drawer, Button, Container, Avatar } from '@mui/material';
import useStyles from '../styles/components-styles/header.styles'
import MenuIcon from '@mui/icons-material/Menu';
import { UserContext } from '../lib/context';
import { useContext } from 'react';

export default function TemporaryDrawer() {
    const [openDrawer, setOpenDrawer] = React.useState(false)
    const classes = useStyles()
    const { currentUser, uid, username, avatarUrl } = useContext(UserContext)

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpenDrawer(open);
    };

    const list = () => (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: 'fit-content',
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            {
                !currentUser ?
                    <Link href={{
                        pathname: '/login'
                    }}>
                        <a><Button className={classes.button} variant='contained' color='secondary'>Log in</Button></a>
                    </Link> :
                    <Link href={{
                        pathname: '/[username]',
                        query: { username: 'de_steve16' }
                    }}>
                        <Avatar sx={{marginBottom: '30px'}} className={classes.avatar} alt={username} src={avatarUrl} />
                    </Link>
            }
            <Link href={{
                pathname: '/'
            }}>
                <a className={classes.linkSM}>Home</a>
            </Link>
            <Link href={{
                pathname: '/feed'
            }}>
                <a className={classes.linkSM}>Feed</a>
            </Link>
            <Link href={{
                pathname: '/'
            }}>
                <a className={classes.linkSM}>Write</a>
            </Link>
            <Link href={{
                pathname: '/news'
            }}>
                <a className={classes.linkSM}>News</a>
            </Link>
        </Box>
    );

    return (
        <div className={classes.headerSM}>
            <Container className={classes.container}>
                <Link href={{
                    pathname: '/'
                }}>
                    <a className={classes.logo}>Blogify</a>
                </Link>
                <MenuIcon className={classes.menu} onClick={toggleDrawer(true)}></MenuIcon>
                <Drawer
                    classes={{ paper: classes.paper }}
                    anchor='right'
                    open={openDrawer}
                    onClose={toggleDrawer(false)}
                >
                    {list()}
                </Drawer>
            </Container>
        </div>
    );
}