import { AppContainer } from '@/lib/components/sidebar'
import { Outlet, useLocation } from 'react-router-dom'

const GeneralLayout = () => {
  const location = useLocation()
  const hideSidebar = location.pathname === '/'

  return (
    <>
      {!hideSidebar && (
        <AppContainer>
          <Outlet />
        </AppContainer>
      )}
    </>
  )
}

export default GeneralLayout
