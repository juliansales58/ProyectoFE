import { Box, Button, Link, TextField } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { buttonLoginStyles } from '../styles'
import { DynamicPassword } from '@/lib'
import toast from 'react-hot-toast'

const FormLogin = () => {
  const form = useForm()
  const onSubmit = () => {
    toast.success('Sesión iniciada correctamente')
  }

  return (
    <Box
      component='form'
      onSubmit={form.handleSubmit(onSubmit)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        paddingY: 3,
      }}
    >
      <Controller
        name='email'
        control={form.control}
        render={({ field, formState: { errors } }) => (
          <TextField
            {...field}
            variant='standard'
            required
            fullWidth
            id='email'
            type='email'
            label='Correo electrónico'
            error={errors.email?.message}
            autoFocus
            size='large'
          />
        )}
      />
      <DynamicPassword form={form} />
      <Box sx={{ textAlign: 'right' }}>
        <Link
          href='#'
          variant='body2'
        >
          ¿Olvidé mi contraseña?
        </Link>
      </Box>
      <Button
        type='submit'
        variant='contained'
        sx={buttonLoginStyles}
        fullWidth
      >
        Iniciar Sesión
      </Button>
    </Box>
  )
}

export default FormLogin
