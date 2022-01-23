import { Container } from '@mui/material'
import useStyles from '../styles/pages-styles/home.styles'
import Loader from '../components/Loader'

const Home = () => {

  const classes = useStyles()

  return (
    <Container maxWidth='lg'>
      <Loader show />
    </Container>
  )
}

export default Home