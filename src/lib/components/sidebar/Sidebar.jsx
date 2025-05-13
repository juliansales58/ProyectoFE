import { DynamicListItem } from '@/lib/ui'
import { HomeOutlined, LogoutOutlined } from '@mui/icons-material'
import { Divider, Drawer, List } from '@mui/material'
import { elementsSidebar } from './constants'

const Sidebar = () => {
  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
      variant='permanent'
      anchor='left'
    >
      <List sx={{ pt: 5 }}>
        <DynamicListItem
          Icon={HomeOutlined}
          text='Home'
        />
      </List>
      <Divider />
      <List sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        {elementsSidebar?.map((item, index) => (
          <DynamicListItem
            key={index}
            Icon={item.icon}
            text={item?.label}
            sx={{ ...item?.sx }}
          />
        ))}
      </List>
      <Divider sx={{ marginTop: 'auto' }} />
      <List>
        <DynamicListItem
          Icon={LogoutOutlined}
          text='Cerrar sesión'
        />
      </List>
    </Drawer>
  )
}

export default Sidebar
