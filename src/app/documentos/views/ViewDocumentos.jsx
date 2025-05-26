import { BasicTitle, DynamicTable, useSearch } from '@/lib'
import { Box, Button } from '@mui/material'
import { columnsDocumentos } from './constants'
import { DynamicSearch } from '@/lib/components/searcher'

const ViewDocumentos = () => {
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
        <BasicTitle title='Documentos' />
        <Box sx={{ width: '70%' }}>
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
        <DynamicTable columns={columnsDocumentos} />
      </Box>
    </>
  )
}

export default ViewDocumentos
