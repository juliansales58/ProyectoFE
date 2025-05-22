import { DataGrid } from '@mui/x-data-grid'

const DynamicTable = ({ rows = [], columns = [], rest }) => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pinnedColumns: { right: ['acciones'] },
      }}
      autosizeOnMount
      hideFooterPagination
      sx={{ minHeight: '300px', ...rest?.sx }}
    />
  )
}

export default DynamicTable
