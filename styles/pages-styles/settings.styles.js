import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    container: {
        height: 'fit-content',
        padding: '75px 0',
        display: 'flex',
    },

    infoBox: {
        width: 'fit-content',
        height: 'fit-content',
        outline: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    infoBoxElement: {
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
    },

    avatar: {
        width: '70%',
        height: 'auto',
        borderRadius: '50%',
        marginBottom: '25px',
    },

    editBox: {
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
        padding: '45px 50px'
    },

    editElement: {
        width: '100%',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },

    editTitle: {
        marginBottom: '8px',
        minWidth: '80px',
    }
}, {name: 'Mui_Stgs_Cpnt'})

export default useStyles