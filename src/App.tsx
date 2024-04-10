import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import BarraLateral from './containers/BarraLateral'
import ListaDeContatos from './containers/ListaDeContatos'
import EstiloGlobal, { Container } from './styles'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </>
  )
}

export default App
