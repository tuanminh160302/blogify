import Link from "next/link"
import { UserContext } from "../lib/context"
import { useContext } from "react"
import { LoadingButton } from '@mui/lab'
import { Typography } from "@mui/material"

const AlreadySignedIn = () => {
    const { userData } = useContext(UserContext)
    const username = userData.username

    return (
        <>
            {
                username ?
                    <Link href='/'>
                        <a style={{
                            color: '#f2f2f2', background: '#222831', padding: '30px',
                            boxShadow: '0px 0px 15px 5px rgba(0,0,0,0.35)',
                            WebkitBoxShadow: '0px 0px 15px 5px rgba(0,0,0,0.35)',
                            borderRadius: '20px'
                        }}>
                            Already Signed In. Click here to go back to the home page
                        </a>
                    </Link> :
                    <LoadingButton disabled loading variant="contained" loadingPosition="start" sx={{ color: '#f2f2f2 !important', background: '#f96d00 !important' }}>
                        <Typography variant='string' sx={{marginLeft: '20px', fontSize: '.7rem'}}>Fetching data...</Typography>
                    </LoadingButton>
            }
        </>
    )
}

export default AlreadySignedIn