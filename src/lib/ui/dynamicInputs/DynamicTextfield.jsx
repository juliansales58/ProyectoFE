import { TextField } from '@mui/material'

const DynamicTextfield = (props) => {
  return (
    <TextField
      fullWidth
      size='small'
      {...props}
      type={props?.type ?? 'text'}
      value={props?.value ?? ''}
      multiline={props?.type === 'multiline'}
      minRows={props?.minRows ? props?.minRows : 1}
      sx={{
        '& .MuiInputBase-root': {
          backgroundColor: 'backgroundWhite1',
        },
        ...props?.sx,
      }}
    />
  )
}

export default DynamicTextfield
