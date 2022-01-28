import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    container: {
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '75px 0',
        height: '50vh',
    },

    infoBox: {
        borderRadius: '10px',
        background: '#222831',
        minWidth: '320px',
        maxWidth: '320px',
        boxShadow: '0px 0px 15px 5px rgb(0 0 0 / 35%)',
        WebkitBoxShadow: '0px 0px 15px 5px rgb(0 0 0 / 35%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '45px 25px',
        height: 'fit-content'
    },

    avatar: {
        width: '70%',
        height: 'auto',
        borderRadius: '50%',
        marginBottom: '25px',
    },

    postBox: {
        flexGrow: '.95',
        height: 'fit-content',
        background: '#222831',
        outline: 'none',
        padding: '30px',
        boxShadow: '0px 0px 15px 5px rgb(0 0 0 / 35%)',
        WebkitBoxShadow: '0px 0px 15px 5px rgb(0 0 0 / 35%)',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        padding: '45px 50px',
        height: '50vh',
    },
})

export default useStyles