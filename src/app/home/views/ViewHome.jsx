import { Avatar, Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import { UserFormSection } from '../components'

const ViewHome = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        bgcolor: '#f4f6f8',
        py: 4,
      }}
    >
      <Container>
        <Box
          sx={{
            bgcolor: 'white',
            borderRadius: 1,
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            p: 3,
            mb: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '80vh',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 12,
              pt: 3,
              pb: 6,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Avatar
              sx={{
                bgcolor: 'success.main',
                width: 120,
                height: 120,
                fontSize: 40,
                mb: 2,
              }}
            />
            <Box>
              <Typography
                variant='h6'
                fontWeight='bold'
                color='text.primary'
                textAlign='center'
                mb={0.5}
              >
                Bienvenido
              </Typography>
              <Typography
                variant='h5'
                fontWeight='bold'
                color='text.primary'
                textAlign='center'
                mb={2}
              >
                Nombre Aprendiz
              </Typography>
            </Box>
          </Box>
          <UserFormSection />
        </Box>
      </Container>
    </Box>
  )
}

export default ViewHome
