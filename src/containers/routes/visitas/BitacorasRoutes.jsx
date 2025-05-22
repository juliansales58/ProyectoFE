import Visitas from '@/app/visitas/Visitas'

const VisitasRoutes = ({ Routes, Route }) => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Visitas />}
      />
    </Routes>
  )
}

export default VisitasRoutes
