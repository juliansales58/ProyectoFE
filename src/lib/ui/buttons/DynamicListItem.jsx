import { HomeOutlined } from '@mui/icons-material'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

const DynamicListItem = ({ sx = {}, Icon = HomeOutlined, text = '', path }) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <ListItemButton
      sx={{
        ...sx,
        backgroundColor: pathname.includes(path) && path !== '/' ? '#f0f0f0' : 'transparent',
      }}
      onClick={() => {
        if (path) {
          navigate(path)
        }
      }}
    >
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  )
}

export default DynamicListItem
