import GeneralLayout from '@/app/GeneralLayout'
import Login from '@/app/page'
import { useStoreState } from 'easy-peasy'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const RouterRoutes = () => {
  const userData = useStoreState((state) => state.user.userData)
  const routes = [{ condition: !userData, element: <Login /> }]
  const RouteValidation = () => routes.find((route) => route.condition).element

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<GeneralLayout />}
        >
          <Route
            index
            element={RouteValidation()}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouterRoutes
