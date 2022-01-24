import '../styles/global.scss'
import { ThemeProvider } from '@mui/material'
import theme from '../lib/theme'
import Header from '../components/Header'
import { Toaster } from 'react-hot-toast'
import checkMobile from '../lib/isMobile'
import '@fontsource/montserrat/100.css';
import '@fontsource/montserrat/200.css';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/800.css';
import '@fontsource/montserrat/900.css';

const MyApp = ({ Component, pageProps }) => {

  const isMobile = checkMobile()

  return (
      <ThemeProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
          <Toaster position='top-center' reverseOrder={false}/>
      </ThemeProvider>
  )
}

export default MyApp
