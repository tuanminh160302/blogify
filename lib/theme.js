import { createTheme } from '@mui/material'
import '@fontsource/montserrat'

const theme = createTheme({
  palette: {
    primary: {
      main: '#222831',
      light: '#393e46'
    },
    secondary: {
      main: '#f2f2f2',
    },
    success: {
      main: '#f96d00'
    }
  },
  typography: {
    fontFamily: "Montserrat",
    fontSize: 12,
  },
});

export default theme