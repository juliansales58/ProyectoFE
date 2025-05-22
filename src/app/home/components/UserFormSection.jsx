import { DynamicForm } from '@/lib'
import { useForm } from 'react-hook-form'
import { userInputs } from '../constants'
import { Button, Grid } from '@mui/material'

const UserFormSection = () => {
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
        inputs={userInputs}
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

export default UserFormSection
