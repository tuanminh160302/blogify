import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px',
        width: '100%',
        height: 'fit-content',
        position: 'sticky',
        top: '0',
    },
    container: {
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        fontSize: '1.2rem',
        color: 'white',
        fontWeight: '600',
        height: 'fit-content'
    },
    box: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto',
        width: 'fit-content',
    },
    button: {
        fontWeight: '600',
        textTransform: 'none',
        marginLeft: '20px',
        fontSize: '.9rem'
    },
    link: {
        color: 'white',
        fontWeight: '600',
        fontSize: '.9rem',
        marginLeft: '20px',

        '&:after': {
            display: 'block',
            content: "''",
            borderBottom: '2px solid white',
            marginTop: '2.5px',
            transform: 'scaleX(0)',
            transformOrigin: 'left',
            transition: '.3s',
        },

        '&:hover:after': {
            transform: 'scaleX(1)',
            transition: '.3s',
        }
    }
},
{ name: 'Mui_Hdr_Cpnt'})

export default useStyles