import { BasicTitle, DynamicTable } from '@/lib'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { columnsAprendices } from '../constants'

const ViewFicha = () => {
  const navigate = useNavigate()
  return (
    <>
      <Box
        display='flex'
        width='100%'
        alignItems='center'
        flexDirection='row'
        p={10}
        pl={6}
      >
        <BasicTitle
          title='Listas de aprendices por ficha'
          onClick={() => navigate('/fichas')}
        />
      </Box>
      <Box
        sx={{
          bgcolor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '95vh',
          p: 8,
          pb: 4,
          pt: 0,
        }}
      >
        <DynamicTable columns={columnsAprendices} />
      </Box>
    </>
  )
}

export default ViewFicha
