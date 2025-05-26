import Ficha from '@/app/fichas/ficha/Ficha'
import Fichas from '@/app/fichas/Fichas'

const FichasRoutes = ({ Routes, Route }) => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Fichas />}
      />
      <Route
        path=':fichaId'
        element={<Ficha />}
      />
    </Routes>
  )
}

export default FichasRoutes
