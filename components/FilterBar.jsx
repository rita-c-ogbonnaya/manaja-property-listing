'use client';

import { Box, TextField, Select, MenuItem, Button, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { states } from '@/lib/mock-data';

const propertyTypes = [
  'Apartment',
  'Townhouse',
  'Detached House',
  'Semi-Detached',
  'Penthouse',
  'Mansion',
  'Studio',
];

const controlSx = {
  backgroundColor: '#fff',
  borderRadius: '10px',
  '& .MuiOutlinedInput-notchedOutline': { borderColor: '#e2e5ea' },
  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#c9cdd6' },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#1A4C9E' },
};

export default function FilterBar({ filters, onFilterChange }) {
  const handleChange = (field, value) => {
    onFilterChange({ ...filters, [field]: value });
  };

  const handleReset = () =>
    onFilterChange({ search: '', state: 'all', type: 'all', beds: 'all', location: 'all', status: 'all' });

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
        placeholder="Search by title, area or keyword..."
        value={filters.search || ''}
        onChange={(e) => handleChange('search', e.target.value)}
        size="small"
        sx={{ flex: { xs: 1, md: 2 }, '& .MuiOutlinedInput-root': controlSx }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#98a1af', fontSize: 20 }} />
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
        {states.map((s) => (
          <MenuItem key={s.id} value={s.id}>
            {s.label}
          </MenuItem>
        ))}
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

      <Button
        variant="outlined"
        onClick={handleReset}
        sx={{
          color: '#1A4C9E',
          borderColor: '#1A4C9E',
          fontWeight: 700,
          borderRadius: '10px',
          px: 3,
          whiteSpace: 'nowrap',
          '&:hover': { backgroundColor: '#1A4C9E', color: '#fff', borderColor: '#1A4C9E' },
        }}
      >
        Reset
      </Button>
    </Box>
  );
}
