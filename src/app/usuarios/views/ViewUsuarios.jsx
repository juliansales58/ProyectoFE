import { BasicTitle, DynamicTable, useSearch } from '@/lib'
import { Box, Button } from '@mui/material'
import { DynamicSearch } from '@/lib/components/searcher'
import { columnsUsuarios } from '../constants'

const ViewUsuarios = () => {
  const searchDocuments = useSearch()
  return (
    <>
      <Box
        display='flex'
        width='100%'
        justifyContent='flex-start'
        flexDirection='column'
        p={10}
        pl={10}
      >
        <BasicTitle title='Usuarios' />
        <Box sx={{ width: '75%' }}>
          <DynamicSearch
            searchText={searchDocuments?.searchText}
            onChange={searchDocuments?.handleSearchText}
            clearSearch={searchDocuments?.clearSearch}
          />
          <Button
            variant='contained'
            color={'success'}
            sx={{
              borderRadius: '20px',
              fontWeight: 'bold',
              textTransform: 'none',
              boxShadow: 'none',
              px: 3,
              ml: 12,
              py: 1,
              '&:hover': {
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            Buscar
          </Button>
          <Button
            variant='contained'
            color={'success'}
            sx={{
              borderRadius: '20px',
              fontWeight: 'bold',
              textTransform: 'none',
              boxShadow: 'none',
              px: 3,
              py: 1,
              ml: 2,
              '&:hover': {
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            Crear
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '95vh',
          p: 8,
          pb: 4,
          pt: 0,
        }}
      >
        <DynamicTable
          columns={columnsUsuarios}
          rows={[{ id: 1 }]}
          getRowId={(row) => row.id}
        />
      </Box>
    </>
  )
}

export default ViewUsuarios
