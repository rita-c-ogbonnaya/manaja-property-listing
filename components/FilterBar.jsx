'use client';

import { Box, TextField, Select, MenuItem, Button, InputAdornment } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const propertyTypes = [
  'Flat/Apartment',
  'Duplex',
  'Shortlet',
  'Land',
  'Commercial property',
  'Event center/Venue',
];

export default function FilterBar({ filters, onFilterChange, states = [] }) {
  const theme = useTheme();
  
  const controlSx = {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '12px',
    '& .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.mode === 'dark' ? '#2A3A5E' : '#E2E5EA' },
    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.mode === 'dark' ? '#3A4A6E' : '#C9CDD6' },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#1A4C9E' },
    boxShadow: theme.palette.mode === 'dark' ? '0 2px 8px rgba(0, 0, 0, 0.3)' : '0 2px 8px rgba(10, 22, 40, 0.06)',
  };
  const handleChange = (field, value) => {
    onFilterChange({ ...filters, [field]: value });
  };

  const handleReset = () =>
    onFilterChange({ search: '', state: 'all', type: 'all', beds: 'all', location: 'all', status: 'all', property_status: 'all' });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 1.5,
        mb: 3,
        alignItems: { xs: 'stretch', md: 'center' },
      }}
    >
      <TextField
        placeholder="Search properties by name, location..."
        value={filters.search || ''}
        onChange={(e) => handleChange('search', e.target.value)}
        size="small"
        sx={{ flex: { xs: 1, md: 2 }, '& .MuiOutlinedInput-root': controlSx }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#8A93A3', fontSize: 20 }} />
              </InputAdornment>
            ),
          },
        }}
      />

      <Select
        value={filters.state || 'all'}
        onChange={(e) => handleChange('state', e.target.value)}
        size="small"
        sx={{ flex: 1, ...controlSx }}
      >
        <MenuItem value="all">All States</MenuItem>
        {states.length > 0 ? (
          states.map((s) => (
            <MenuItem key={s.id} value={s.label}>
              {s.label}
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled>No states available</MenuItem>
        )}
      </Select>

      <Select
        value={filters.type || 'all'}
        onChange={(e) => handleChange('type', e.target.value)}
        size="small"
        sx={{ flex: 1, ...controlSx }}
      >
        <MenuItem value="all">All Types</MenuItem>
        {propertyTypes.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>

      <Select
        value={filters.beds || 'all'}
        onChange={(e) => handleChange('beds', e.target.value)}
        size="small"
        sx={{ flex: 0.8, ...controlSx }}
      >
        <MenuItem value="all">Any Beds</MenuItem>
        <MenuItem value="1">1+</MenuItem>
        <MenuItem value="2">2+</MenuItem>
        <MenuItem value="3">3+</MenuItem>
        <MenuItem value="4">4+</MenuItem>
        <MenuItem value="5">5+</MenuItem>
      </Select>

      <Select
        value={filters.property_status || 'all'}
        onChange={(e) => handleChange('property_status', e.target.value)}
        size="small"
        sx={{ flex: 1, ...controlSx }}
      >
        <MenuItem value="all">All Listings</MenuItem>
        <MenuItem value="sale">For Sale</MenuItem>
        <MenuItem value="rent">For Rent</MenuItem>
      </Select>

      <Button
        variant="outlined"
        onClick={handleReset}
        sx={{
          color: '#1A4C9E',
          borderColor: '#1A4C9E',
          fontWeight: 700,
          borderRadius: '12px',
          px: 3,
          whiteSpace: 'nowrap',
          '&:hover': { 
            backgroundColor: '#1A4C9E', 
            color: '#fff', 
            borderColor: '#1A4C9E',
            boxShadow: '0 4px 12px rgba(26, 76, 158, 0.3)',
          },
          transition: 'all 0.2s ease',
        }}
      >
        Clear Filters
      </Button>
    </Box>
  );
}
