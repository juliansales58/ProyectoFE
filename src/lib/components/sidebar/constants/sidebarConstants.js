import {
  ArticleOutlined,
  CalendarMonthOutlined,
  DashboardOutlined,
  FolderCopyOutlined,
  PersonOutlined,
} from '@mui/icons-material'

export const elementsSidebar = [
  {
    label: 'Visitas',
    icon: CalendarMonthOutlined,
    path: '/visitas',
    sx: {
      mt: 5,
    },
  },
  {
    label: 'Bitácoras',
    icon: ArticleOutlined,
  },
  {
    label: 'Documentos',
    icon: FolderCopyOutlined,
  },
  {
    label: 'Fichas',
    icon: DashboardOutlined,
  },
  {
    label: 'Usuarios',
    icon: PersonOutlined,
  },
]
