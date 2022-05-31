import { TextareaAutosize } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    root: {
        color: 'white',
        fontSize: '.7rem'
    },
    label: {
        color: '#f2f2f2',
        fontSize: '.7rem'
    },
    underline: {
        "&:before": {
            borderColor: "white !important"
        },
        '&:after': {
            borderColor: '#f96d00 !important'
        },
    }
},
    { name: 'Mui_TextArea_Cpnt' })

const TextArea = ({ name, onChange, value, placeholder, minRows }) => {
    const classes = useStyles()

    return (
        <TextareaAutosize
            InputProps={{ classes }}
            InputLabelProps={{ className: classes.label }}
            color="secondary"
            margin="normal"
            name={name}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            minRows={minRows}
        />
    )
}

TextArea.muiName = TextareaAutosize.muiName

export default TextArea