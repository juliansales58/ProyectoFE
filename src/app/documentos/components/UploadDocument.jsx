import { DynamicForm } from '@/lib'
import { Button, Grid } from '@mui/material'
import { useForm } from 'react-hook-form'
import { inputsDocuments } from '../constants'

const UploadDocument = () => {
  const form = useForm()

  return (
    <Grid
      container
      spacing={10}
      sx={{ width: '60%' }}
      justifyContent='center'
    >
      <DynamicForm
        control={form?.control}
        inputs={inputsDocuments}
      />
      <Button
        variant='contained'
        color={'success'}
        sx={{
          borderRadius: '20px',
          fontWeight: 'bold',
          textTransform: 'none',
          boxShadow: 'none',
          px: 3,
          ml: 12,
          py: 1,
          '&:hover': {
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        Editar
      </Button>
    </Grid>
  )
}

export default UploadDocument
