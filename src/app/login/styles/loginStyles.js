export const loginContainer = {
  height: '100vh',
  width: '100vw',
  backgroundColor: '#f8f9fa',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 2,
  overflow: 'hidden',
}

export const loginBox = {
  maxWidth: '830px',
  width: '80%',
  minHeight: '500px',
  bgcolor: 'white',
  boxShadow: 3,
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  gap: 4,
  alignItems: 'stretch',
}

export const informativeSectionContainer = {
  backgroundColor: 'rgb(112, 178, 45)',
  color: 'white',
  flex: 1,
  minHeight: { xs: 'auto', md: '500px' },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: 4,
}

export const formContainer = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingX: 4,
  paddingY: 3,
}

export const avatarStyles = {
  bgcolor: 'grey.300',
  mx: 'auto',
  marginBottom: 3,
  width: 80,
  height: 80,
}

export const buttonLoginStyles = {
  backgroundColor: 'rgb(112, 178, 45)',
  borderRadius: '999px',
  textTransform: 'none',
  fontSize: 16,
  paddingY: 1.5,
  '&:hover': {
    backgroundColor: '#689f38',
  },
}
