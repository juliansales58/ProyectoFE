import Fichas from '@/app/fichas/Fichas'

const FichasRoutes = ({ Routes, Route }) => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Fichas />}
      />
    </Routes>
  )
}

export default FichasRoutes
