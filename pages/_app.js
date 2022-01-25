import '@fontsource/montserrat/100.css';
import '@fontsource/montserrat/200.css';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/800.css';
import '@fontsource/montserrat/900.css';
import '../styles/global.scss'
import { ThemeProvider } from '@mui/material'
import theme from '../lib/theme'
import Header from '../components/Header'
import { Toaster } from 'react-hot-toast'
import checkMobile from '../lib/isMobile'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../lib/firebase'
import { UserContext} from '../lib/context'
import { useState, useEffect } from 'react';
import { getTargetUsername, getTargetUserAvt } from '../lib/firebase';
import { handleErrorToast } from '../lib/toast';
import { useRouter } from 'next/router';

const MyApp = ({ Component, pageProps }) => {

  const router = useRouter()
  const [currentUser, setCurrentUser] = useState(null)
  const [uid, setUid] = useState(null)
  const [username, setUsername] = useState(null)
  const [avatarUrl, setAvatarUrl] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Signed In
        setCurrentUser(user)
        setUid(user.uid)
        await getTargetUsername(user.uid).then((res) => {
          setUsername(res)
        }).catch(err => handleErrorToast(err.message))
        await getTargetUserAvt(user.uid).then((res) => {
          setAvatarUrl(res)
        }).catch(err => handleErrorToast(err.message))
      } else {
        // Signed out
        setCurrentUser(null)
        setUid(null)
        setUsername(null)
        setAvatarUrl(null)
      }
    })
  }, [auth, router.pathname])

  return (
    <UserContext.Provider value={{currentUser, uid, username, avatarUrl}}>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Toaster position='top-center' reverseOrder={false} />
      </ThemeProvider>
    </UserContext.Provider>
  )
}

export default MyApp