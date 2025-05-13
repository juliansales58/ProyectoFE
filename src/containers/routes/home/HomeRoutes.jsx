import Home from '@/app/home/Home'

const InboxRoutes = ({ Routes, Route }) => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
    </Routes>
  )
}

export default InboxRoutes
