import Link from 'next/link'
import { Box, Container, Button, Typography } from '@mui/material'
import useStyles from '../styles/components-styles/header.styles'
import useCheckMobile from '../lib/isMobile'
import HeaderXL from './HeaderXL'
import HeaderSM from './HeaderSM'
import HeaderSM_Taskbar from './HeaderSM_Taskbar'

const Header = ({ }) => {
    const isMobile = useCheckMobile()

    return (
        <>
            {
                !isMobile ?
                    <HeaderXL /> :
                    <>
                        <HeaderSM />
                        <HeaderSM_Taskbar />
                    </>
            }
        </>
    )
}

export default Header