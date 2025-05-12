import { Avatar, Box, Typography } from '@mui/material'
import { FormLogin } from '../components'
import { Person } from '@mui/icons-material'
import {
  avatarStyles,
  formContainer,
  informativeSectionContainer,
  loginBox,
  loginContainer,
} from '../styles'

const ViewLogin = () => {
  return (
    <Box sx={loginContainer}>
      <Box sx={loginBox}>
        <Box sx={informativeSectionContainer}>
          <Typography variant='h4'>Sistema de</Typography>
          <Typography
            variant='h3'
            fontWeight='bold'
          >
            Seguimiento
          </Typography>
          <Typography variant='h4'>Etapa Práctica</Typography>
        </Box>

        <Box sx={formContainer}>
          <Avatar sx={avatarStyles}>
            <Person sx={{ color: 'white', fontSize: 60 }} />
          </Avatar>
          <FormLogin />
        </Box>
      </Box>
    </Box>
  )
}

export default ViewLogin
