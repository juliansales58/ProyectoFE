import { TextField } from '@mui/material'
import { forwardRef } from 'react'

const DynamicTextfield = forwardRef(function DynamicTextfield(props, ref) {
  return (
    <TextField
      ref={ref}
      fullWidth
      size='small'
      variant='outlined'
      {...props}
      type={props?.type ?? 'text'}
      value={props?.value ?? ''}
      multiline={props?.type === 'multiline'}
      minRows={props?.minRows ? props?.minRows : 1}
      sx={{
        '& .MuiInputBase-root': {
          backgroundColor: 'backgroundWhite1',
        },
        '& .MuiOutlinedInput-root': {
          borderRadius: '50px',
        },
        ...props?.sx,
      }}
    />
  )
})

export default DynamicTextfield
