import Link from 'next/link'
import { Box, Container, Button, Typography } from '@mui/material'
import useStyles from '../styles/components-styles/header.styles'

const HeaderXL = () => {

    const classes = useStyles()
    const user = null
    const username = null
    
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
                        !user ?
                            <Link href={{
                                pathname: '/login'
                            }}>
                                <Button className={classes.button} variant='contained' color='secondary'><a>Log in</a></Button>
                            </Link> :
                            <Link href={{
                                pathname: '/[username]',
                                query: { username: 'de_steve16' }
                            }}>
                                <a className={classes.link}>Profile</a>
                            </Link>
                    }
                </Box>
            </Container>
        </div>
    )
}

export default HeaderXL