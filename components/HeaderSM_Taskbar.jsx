import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material'
import { Restore, Home, Dashboard, AddBox, Newspaper } from '@mui/icons-material'
import Link from 'next/link'
import useStyles from '../styles/components-styles/header.styles'
import { useState } from 'react'

const HeaderSM_Taskbar = ({ }) => {
    const classes = useStyles()
    const [value, setValue] = useState()

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                width: '100%',
                padding: '5px 20px 10px 20px',
                position: 'fixed',
                bottom: '0',
                left: '0',
                background: '#222831',
                zIndex: '100',
                boxShadow: '0px 0px 15px 5px rgba(0,0,0,0.35)',
                WebkitBoxShadow: '0px 0px 15px 5px rgba(0,0,0,0.35)',
            }}
            role="presentation"
        >
            {/* <Link href={{
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
            </Link> */}
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                sx={{ width: '100%', background: 'transparent' }}
            >
                <Link href='/'>
                    <BottomNavigationAction sx={{ color: '#f2f2f2' }} label="" icon={<Home />} />
                </Link>
                <Link href='/feed'>
                    <BottomNavigationAction sx={{ color: '#f2f2f2' }} label="" icon={<Dashboard />} />
                </Link>
                <Link href='/'>
                    <BottomNavigationAction sx={{ color: '#f2f2f2' }} label="" icon={<AddBox />} />
                </Link>
                <Link href='/news'>
                    <BottomNavigationAction sx={{ color: '#f2f2f2' }} label="" icon={<Newspaper />} />
                </Link>
            </BottomNavigation>
        </Box >
    )
}

export default HeaderSM_Taskbar