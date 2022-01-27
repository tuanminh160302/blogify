import { TextField } from "@mui/material"
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
    { name: 'Mui_Ip_Cpnt' })

const FormInput = ({ variant, label, required, type, fullWidth, name, onChange, className, value }) => {
    const classes = useStyles()

    return (
        <TextField
            className={className}
            InputProps={{ classes }}
            InputLabelProps={{ className: classes.label }}
            variant={variant}
            label={label}
            type={type}
            required={required}
            color="secondary"
            margin="normal"
            fullWidth={fullWidth}
            name={name}
            onChange={onChange}
            value={value}
        />
    )
}

FormInput.muiName = TextField.muiName

export default FormInput