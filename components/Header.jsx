import Link from 'next/link'
import { Box, Container, Button, Typography } from '@mui/material'
import useStyles from '../styles/components-styles/header.styles'
import checkMobile from '../lib/isMobile'
import HeaderXL from './HeaderXL'
import HeaderSM from './HeaderSM'

const Header = ({ }) => {
    const isMobile = checkMobile()

    return (
        <>
            {
                !isMobile ? <HeaderXL></HeaderXL> : <HeaderSM></HeaderSM>
            }
        </>
    )
}

export default Header