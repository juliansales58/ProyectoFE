import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterRoutes } from './containers/routes'
import { MainContainer } from './containers/mainContainer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainContainer>
      <RouterRoutes />
    </MainContainer>
  </StrictMode>
)
