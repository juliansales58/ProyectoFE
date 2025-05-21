import { DynamicTable } from '@/lib'
import { Box, Typography } from '@mui/material'

const ViewBitacoras = () => {
  return (
    <>
      <Typography
        variant='h6'
        fontWeight='bold'
        color='text.primary'
        textAlign='flex-start'
        pt={3}
        pl={8}
        mb={0.5}
      >
        Solicitudes
      </Typography>
      <Box
        sx={{
          bgcolor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <DynamicTable />
      </Box>
    </>
  )
}

export default ViewBitacoras
