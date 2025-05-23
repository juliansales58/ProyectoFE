import Home from '@/app/home/Home'

const HomeRoutes = ({ Routes, Route }) => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
    </Routes>
  )
}

export default HomeRoutes
