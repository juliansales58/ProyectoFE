import { Button } from '@mui/material'

const BasicButton = ({ color, title, onClick, sx }) => {
  return (
    <Button
      variant='contained'
      color={color ?? 'success'}
      onClick={onClick}
      sx={{
        ...sx,
        borderRadius: '20px',
        fontWeight: 'bold',
        textTransform: 'none',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      {title ?? 'Editar'}
    </Button>
  )
}

export default BasicButton
