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
    sx: {
      mt: 5,
    },
  },
  {
    label: 'Bitácoras',
    icon: ArticleOutlined,
    path: '/bitacoras',
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
