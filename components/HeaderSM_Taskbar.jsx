import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material'
import { Restore, Home, Dashboard, AddBox, Newspaper } from '@mui/icons-material'
import Link from 'next/link'
import useStyles from '../styles/components-styles/header.styles'
import { useState, useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import { useRouter } from 'next/router'

const useBottomNavigationActionStyles = makeStyles({
    selected: {
        color: '#f96d00 !important',
    },
    icon: {
        fill: 'black !important'
    }
}, {name: 'Mui_BotNav_Cpnt'})

const HeaderSM_Taskbar = ({ }) => {
    const classes = useStyles()
    const [value, setValue] = useState()
    const router = useRouter()
    const bottomNavAcClasses = useBottomNavigationActionStyles()

    useEffect(() => {
        if (router.pathname !== '/' && router.pathname !== '/feed' && router.pathname !== '/news') {
            setValue(null)
            console.log(router.pathname)
        }
    }, [router.pathname])

    const handleNavRouting = (e) => {
        e.preventDefault()
        e.target.innerText === 'Home' && router.push('/')
        e.target.innerText === 'Feed' && router.push('/feed')
        e.target.innerText === 'Write' && router.push('/')
        e.target.innerText === 'News' && router.push('/news')
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                width: '100%',
                padding: '15px 20px',
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
                sx={{width: '100%', background: 'transparent'}}
            >
                <BottomNavigationAction className={bottomNavAcClasses} sx={{color: '#f2f2f2'}} label="Home" icon={<Home />} onClick={(e) => {handleNavRouting(e)}}/>
                <BottomNavigationAction className={bottomNavAcClasses} sx={{color: '#f2f2f2'}} label="Feed" icon={<Dashboard />} onClick={(e) => {handleNavRouting(e)}}/>
                <BottomNavigationAction className={bottomNavAcClasses} sx={{color: '#f2f2f2'}} label="Write" icon={<AddBox />} onClick={(e) => {handleNavRouting(e)}}/>
                <BottomNavigationAction className={bottomNavAcClasses} sx={{color: '#f2f2f2'}} label="News" icon={<Newspaper />} onClick={(e) => {handleNavRouting(e)}}/>
            </BottomNavigation>
        </Box >
    )
}

export default HeaderSM_Taskbar