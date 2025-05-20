import { Box, CssBaseline } from '@mui/material'
import { Navbar, Sidebar } from '.'

const AppContainer = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <CssBaseline />
      <Navbar />
      <Sidebar />
      <Box
        component='main'
        sx={{
          mt: '96px',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default AppContainer
