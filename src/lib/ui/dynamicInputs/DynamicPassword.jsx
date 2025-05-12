import { IconButton, TextField } from '@mui/material'
import { useState } from 'react'
import { Controller } from 'react-hook-form'
import { Visibility, VisibilityOff } from '@mui/icons-material'

const DynamicPassword = ({
  form,
  label = 'Contraseña',
  name = 'password',
  helperText = '',
  validationRules = { required: 'La contraseña es obligatoria' },
} = {}) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Controller
      name={name}
      control={form.control}
      rules={validationRules}
      render={({ field, formState: { errors } }) => (
        <TextField
          {...field}
          variant='standard'
          required
          fullWidth
          type={showPassword ? 'text' : 'password'}
          label={label}
          error={!!errors[name]}
          size='large'
          helperText={errors[name]?.message || helperText}
          slotProps={{
            input: {
              endAdornment: (
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={() => setShowPassword(!showPassword)}
                  edge='end'
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            },
          }}
        />
      )}
    />
  )
}

export default DynamicPassword
