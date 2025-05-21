import { DataGrid } from '@mui/x-data-grid'

const DynamicTable = ({ rows = [], columns = [], rest }) => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      sx={{ backgroundColor: 'backgroundWhite1', minHeight: '300px', ...rest?.sx }}
    />
  )
}

export default DynamicTable
