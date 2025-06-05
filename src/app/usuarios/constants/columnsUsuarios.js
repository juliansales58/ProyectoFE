import { Box, Button } from '@mui/material'

export const columnsUsuarios = [
  {
    field: 'nombre',
    headerName: 'Nombre',
    width: 150,
  },
  {
    field: 'identificacion',
    headerName: 'Identificación',
    width: 150,
  },
  {
    field: 'documento',
    headerName: 'Documento',
    width: 150,
  },
  {
    field: 'tipoDocumento',
    headerName: 'Tipo documento',
    width: 150,
  },
  {
    field: 'observaciones',
    headerName: 'Observaciones',
    width: 150,
  },
  {
    field: 'acciones',
    headerName: '',
    width: 200,
    resizable: false,
    renderCell: () => (
      <Box
        display='flex'
        alignContent='center'
        justifyContent='space-between'
        width='100%'
      >
        <Button
          variant='contained'
          color={'success'}
          size='small'
        >
          Editar
        </Button>
        <Button
          variant='contained'
          color='error'
          size='small'
        >
          Eliminar
        </Button>
      </Box>
    ),
  },
]
