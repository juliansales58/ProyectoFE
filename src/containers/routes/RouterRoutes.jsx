import GeneralLayout from '@/app/GeneralLayout'
import Home from '@/app/home/Home'
import Login from '@/app/page'
import { useStoreState } from 'easy-peasy'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeRoutes } from './home'
import Visitas from '@/app/visitas/Visitas'
import VisitasRoutes from './visitas/BitacorasRoutes'
import Fichas from '@/app/fichas/Fichas'
import { FichasRoutes } from './fichas'
import Documentos from '@/app/documentos/Documentos'

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
          <Route
            path='visitas'
            element={<Visitas />}
          />
          <Route
            path='visitas/*'
            element={
              <VisitasRoutes
                Route={Route}
                Routes={Routes}
              />
            }
          />
          <Route
            path='fichas'
            element={<Fichas />}
          />
          <Route
            path='fichas/*'
            element={
              <FichasRoutes
                Route={Route}
                Routes={Routes}
              />
            }
          />
          <Route
            path='documentos'
            element={<Documentos />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouterRoutes
