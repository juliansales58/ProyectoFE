import Bitacoras from '@/app/bitacoras/Bitacoras'

const BitacorasRoutes = ({ Routes, Route }) => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Bitacoras />}
      />
    </Routes>
  )
}

export default BitacorasRoutes
