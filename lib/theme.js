import { createTheme } from '@mui/material'
import '@fontsource/montserrat'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a2639',
    },
    secondary: {
      main: '#d9dad7',
    },
  },
  typography: {
    fontFamily: "Montserrat",
    fontSize: 12,
  }
});

export default theme