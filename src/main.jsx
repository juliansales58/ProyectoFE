import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterRoutes } from './containers/routes'
import { MainContainer } from './containers/mainContainer'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  palette: {
    success: {
      main: '#39A900', // Cambia el color principal de "success"
      contrastText: '#ffffff', // Color del texto cuando se usa "success"
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <MainContainer>
        <RouterRoutes />
      </MainContainer>
    </ThemeProvider>
  </StrictMode>
)
