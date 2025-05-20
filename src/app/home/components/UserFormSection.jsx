import { DynamicForm } from '@/lib'
import { useForm } from 'react-hook-form'
import { userInputs } from '../constants'
import { Grid } from '@mui/material'

const UserFormSection = () => {
  const form = useForm()

  return (
    <Grid
      container
      spacing={10}
      sx={{ width: '60%' }}
    >
      <DynamicForm
        control={form?.control}
        inputs={userInputs}
      />
    </Grid>
  )
}

export default UserFormSection
