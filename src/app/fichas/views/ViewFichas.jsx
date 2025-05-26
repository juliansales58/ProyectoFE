import { BasicTitle } from '@/lib'
import { Box } from '@mui/material'
import { InfoFicha } from '../components' // Asegúrate de que esta ruta sea correcta

const ViewFichas = () => {
  const fichasData = [
    { numero: '2927881', programa: 'nombre Programa' },
    { numero: '773612', programa: 'Nombre Programa' },
    { numero: '812737', programa: 'Nombre Programa' },
    { numero: '1132331', programa: 'Nombre Programa' },
    { numero: '255637', programa: 'Nombre Programa' },
    { numero: '365876', programa: 'Nombre Programa' },
  ]

  return (
    <Box
      display='flex'
      flexDirection='column'
      overflow='auto'
    >
      <Box
        display='flex'
        width='100%'
        justifyContent='space-between'
        alignItems='center'
        flexDirection='row'
        p={10}
      >
        <BasicTitle title='Fichas' />
      </Box>
      <Box
        sx={{
          display: 'grid',
          gap: '20px',
          padding: '20px',
          maxWidth: '1200px',
          margin: '0 auto',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          },
          justifyItems: 'center',
        }}
      >
        {fichasData.map((ficha, index) => (
          <InfoFicha
            key={index}
            ficha={ficha}
          />
        ))}
      </Box>
    </Box>
  )
}

export default ViewFichas
