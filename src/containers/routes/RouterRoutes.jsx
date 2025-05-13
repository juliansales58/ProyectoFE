import GeneralLayout from '@/app/GeneralLayout'
import Home from '@/app/home/Home'
import Login from '@/app/page'
import { useStoreState } from 'easy-peasy'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeRoutes } from './home'

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
          <Route
            path='home'
            element={<Home />}
          />
          <Route
            path='home/*'
            element={
              <HomeRoutes
                Route={Route}
                Routes={Routes}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouterRoutes
