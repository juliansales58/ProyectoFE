import { Avatar, Box, IconButton, Typography } from '@mui/material'

const WelcomeSection = ({ name = '' }) => {
  return (
    <>
      <IconButton>
        <Avatar />
      </IconButton>
      <Typography>Bienvenido {name}</Typography>
    </>
  )
}

export default WelcomeSection
