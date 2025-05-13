import { NotificationsNone } from '@mui/icons-material'
import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from '@mui/material'

const Navbar = () => {
  return (
    <AppBar
      position='fixed'
      sx={{
        width: `calc(100% - 240px)`,
        ml: '240px',
        backgroundColor: 'white',
        boxShadow: 'none',
        borderBottom: '1px solid #ddd',
        height: 96,
        justifyContent: 'center',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <img
            src='/assets/img/logoSena.png'
            alt='Logo SENA'
            style={{ width: 40, height: 40 }}
          />
          <Box>
            <Typography
              variant='subtitle2'
              color='green'
              fontWeight={600}
            >
              Sistema de Seguimiento
            </Typography>
            <Typography
              variant='subtitle2'
              color='green'
            >
              Etapa Práctica
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton>
            <NotificationsNone />
          </IconButton>
          <IconButton>
            <Avatar />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
