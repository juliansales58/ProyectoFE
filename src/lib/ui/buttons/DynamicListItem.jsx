import { Home, HomeOutlined } from '@mui/icons-material'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

const DynamicListItem = ({ sx = {}, Icon = HomeOutlined, text = '' }) => {
  return (
    <ListItemButton sx={sx}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  )
}

export default DynamicListItem
