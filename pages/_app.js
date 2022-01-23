import '../styles/global.scss'
import { ThemeProvider } from '@mui/material'
import theme from '../lib/theme'
import Header from '../components/Header'
import { Toaster } from 'react-hot-toast'

const MyApp = ({ Component, pageProps }) => {
  return (
      <ThemeProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
          <Toaster position='top-center' reverseOrder={false}/>
      </ThemeProvider>
  )
}

export default MyApp
