import { Card, CardMedia, Typography, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const InfoFicha = ({ ficha }) => {
  const navigate = useNavigate()
  return (
    <Card
      sx={{
        width: 240,
        height: 240,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '8px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
      onClick={() => navigate(`/fichas/${ficha?.numero}`)}
    >
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: '#39A900',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '60%',
        }}
      >
        <CardMedia
          component='img'
          image='/assets/img/fichaImg.png'
          alt='Logo SENA'
          sx={{
            width: 120,
            height: 120,
            objectFit: 'contain',
          }}
        />
      </Box>

      <Box
        sx={{
          backgroundColor: '#FFFFFF',
          padding: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '40%',
          borderTop: '1px solid #EEEEEE',
        }}
      >
        <Typography
          variant='body1'
          sx={{ fontWeight: 'bold', color: '#4CAF50' }}
        >
          Ficha {ficha?.numero}
        </Typography>
        <Typography
          variant='h4'
          sx={{ color: '#424242', fontSize: '0.8rem', textAlign: 'center' }}
        >
          {ficha?.programa}
        </Typography>
      </Box>
    </Card>
  )
}

export default InfoFicha
