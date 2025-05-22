import { Box, Typography } from '@mui/material'
import { DynamicButton } from '../buttons'
import { ArrowBack } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const BasicTitle = ({ title, backpath, onClick }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    if (backpath) {
      navigate(backpath)
    } else if (onClick) {
      onClick()
    }
  }
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        mb: 2,
      }}
    >
      {(backpath || onClick) && (
        <DynamicButton
          title='Regresar'
          onClick={handleClick}
          aria-label='Regresar'
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <ArrowBack />
        </DynamicButton>
      )}
      <Typography
        variant='h5'
        fontWeight='bold'
        color='text.primary'
      >
        {title}
      </Typography>
    </Box>
  )
}

export default BasicTitle
