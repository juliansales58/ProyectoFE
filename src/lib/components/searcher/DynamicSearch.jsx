import { Clear, Search } from '@mui/icons-material'
import { IconButton, TextField } from '@mui/material'

const DynamicSearch = ({
  searchText,
  onChange = () => {},
  clearSearch = () => {},
  handleKeyDown = () => {},
  width,
  label,
  className = '',
}) => {
  return (
    <TextField
      variant='outlined'
      size='small'
      value={searchText ?? ''}
      fullWidth
      className={className}
      label={label ? label : null}
      onChange={(event) => onChange(event.target.value)}
      placeholder={label ? null : 'Buscar...'}
      autoFocus
      onKeyDown={handleKeyDown}
      slotProps={{
        startAdornment: (
          <Search
            fontSize='small'
            color='secondary'
            sx={{ mr: '10px' }}
          />
        ),
        endAdornment: (
          <IconButton
            title='Clear'
            aria-label='Clear'
            size='small'
            style={{ visibility: searchText ? 'visible' : 'hidden' }}
            onClick={clearSearch}
          >
            <Clear fontSize='small' />
          </IconButton>
        ),
      }}
      sx={{ backgroundColor: 'backgroundWhite1', width: width ?? '60%' }}
    />
  )
}

export default DynamicSearch
