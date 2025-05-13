import { Box, CssBaseline } from '@mui/material'
import { Navbar, Sidebar } from '.'

const AppContainer = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Navbar />
      <Sidebar />
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - 240px)`,
          mt: '96px',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default AppContainer
