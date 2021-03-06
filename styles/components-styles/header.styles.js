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
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        background: 'rgba(34,40,49,.5)',
        zIndex: '100',
    },
    headerSM: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px 20px',
        width: '100%',
        height: 'fit-content',
        position: 'sticky',
        top: '0',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        background: 'rgba(34,40,49,.5)',
        zIndex: '100',
    },
    container: {
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    menu: {
        marginLeft: 'auto',
    },
    logo: {
        fontSize: '1rem',
        color: '#f96d00',
        fontWeight: '700',
        height: 'fit-content'
    },
    avatar: {
        marginLeft: '25px',
        cursor: 'pointer',
    },
    paper: {
        background: '#222831',
        paddingTop: '50px',
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
        marginRight: '20px',
        marginLeft: '20px',
        fontSize: '.9rem',
        width: 'fit-content',
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
    },
    linkSM: {
        color: 'white',
        fontWeight: '500',
        fontSize: '.8rem',
        width: 'fit-content',
    },
    nav: {
        width: '100%',
        height: 'fit-content',
        padding: '10px 0',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
},
{ name: 'Mui_Hdr_Cpnt'})

export default useStyles