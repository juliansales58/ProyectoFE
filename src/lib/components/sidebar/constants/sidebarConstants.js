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
    path: '/documentos',
  },
  {
    label: 'Fichas',
    icon: DashboardOutlined,
    path: '/fichas',
  },
  {
    label: 'Usuarios',
    icon: PersonOutlined,
  },
]
