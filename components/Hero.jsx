'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Select,
  MenuItem,
  Button,
  InputLabel,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import SearchIcon from '@mui/icons-material/Search';

const propertyTypes = [
  'Flat/Apartment',
  'Duplex',
  'Land',
  'Commercial property',
  'Event center/Venue',
];

const tabs = ['Buy', 'Rent'];

const fieldSx = {
  '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
  '& .MuiSelect-select': { py: 0.5, fontWeight: 600 },
  fontSize: '0.95rem',
  '&:hover': { backgroundColor: 'rgba(26, 76, 158, 0.05)' },
  '&.Mui-focused': { backgroundColor: 'rgba(26, 76, 158, 0.08)' },
};

function Field({ label, children, theme }) {
  return (
    <Box sx={{ px: { xs: 0, md: 2.5 }, py: { xs: 1, md: 0 }, flex: 1, minWidth: 0 }}>
      <InputLabel
        sx={{
          fontSize: '0.7rem',
          fontWeight: 700,
          letterSpacing: '0.06em',
          color: theme.palette.text.secondary,
          textTransform: 'uppercase',
          mb: 0.25,
        }}
      >
        {label}
      </InputLabel>
      {children}
    </Box>
  );
}

export default function Hero({ filters, onFilterChange, onSearch, stats, states = [] }) {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState('Buy');

  const handleChange = (field, value) => {
    onFilterChange({ ...filters, [field]: value });
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    const propertyStatusMap = {
      'Buy': 'sale',
      'Rent': 'rent',
    };
    onFilterChange({ ...filters, property_status: propertyStatusMap[tab] });
  };

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        background:
          'radial-gradient(ellipse at 50% 0%, rgba(26, 76, 158, 0.25) 0%, transparent 50%), radial-gradient(ellipse at 100% 100%, rgba(245, 183, 12, 0.15) 0%, transparent 40%), linear-gradient(135deg, #0A1628 0%, #1A2744 50%, #0F1729 100%)',
        color: '#fff',
        pt: { xs: 6, md: 9 },
        pb: { xs: 6, md: 10 },
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Badge */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 0.75,
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.18)',
              backgroundColor: 'rgba(255,255,255,0.06)',
              fontSize: '0.85rem',
            }}
          >
            <StarIcon sx={{ fontSize: 16, color: '#F5B70C' }} />
            Premium and Verified Real Estate Solutions
          </Box>
        </Box>

        {/* Heading */}
        <Typography
          component="h1"
          className="text-balance"
          sx={{
            textAlign: 'center',
            fontWeight: 800,
            fontSize: { xs: '2.5rem', sm: '3.25rem', md: '4.25rem' },
            lineHeight: 1.05,
            mb: 2,
          }}
        >
          Premium & verified property listing guaranteed.
        </Typography>
        <Typography
          className="text-pretty"
          sx={{
            textAlign: 'center',
            fontSize: { xs: '1rem', md: '1.15rem' },
            color: 'rgba(255,255,255,0.75)',
            maxWidth: 620,
            mx: 'auto',
            mb: { xs: 4, md: 5 },
          }}
        >
          Explore exclusive properties across Africa's finest locations. From luxury apartments to investment opportunities, find what matters most to you.
        </Typography>

        {/* Search Card */}
        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            p: { xs: 2, md: 2.5 },
            boxShadow: '0 32px 80px rgba(15, 23, 41, 0.4)',
            maxWidth: 1000,
            mx: 'auto',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          {/* Tabs */}
          <Box sx={{ display: 'flex', gap: { xs: 1.5, md: 3 }, mb: 2, flexWrap: 'wrap' }}>
            {tabs.map((tab) => (
              <Box
                key={tab}
                onClick={() => handleTabChange(tab)}
                role="button"
                tabIndex={0}
                sx={{
                  cursor: 'pointer',
                  px: 1.5,
                  py: 0.75,
                  borderRadius: 999,
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  color: activeTab === tab ? '#1A4C9E' : '#5b6472',
                  backgroundColor: activeTab === tab ? 'rgba(26,76,158,0.1)' : 'transparent',
                  transition: 'all 0.2s ease',
                }}
              >
                {tab}
              </Box>
            ))}
          </Box>

          {/* Fields */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'stretch', md: 'center' },
              backgroundColor: theme.palette.mode === 'dark' ? '#161B22' : '#f6f7f9',
              borderRadius: '12px',
              p: { xs: 1.5, md: 1 },
              gap: { xs: 0, md: 0 },
            }}
          >
            <Field label="Location" theme={theme}>
              <Select
                fullWidth
                variant="outlined"
                value={filters.state || 'all'}
                onChange={(e) => handleChange('state', e.target.value)}
                sx={{ ...fieldSx, '& .MuiSelect-select': { color: theme.palette.text.primary } }}
              >
                <MenuItem value="all">Any location</MenuItem>
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
            </Field>

            <Box sx={{ display: { xs: 'none', md: 'block' }, width: '1px', height: 40, backgroundColor: theme.palette.divider }} />

            <Field label="Property Type" theme={theme}>
              <Select
                fullWidth
                variant="outlined"
                value={filters.type || 'all'}
                onChange={(e) => handleChange('type', e.target.value)}
                sx={{ ...fieldSx, '& .MuiSelect-select': { color: theme.palette.text.primary } }}
              >
                <MenuItem value="all">Any type</MenuItem>
                {propertyTypes.map((t) => (
                  <MenuItem key={t} value={t}>
                    {t}
                  </MenuItem>
                ))}
              </Select>
            </Field>

            <Box sx={{ display: { xs: 'none', md: 'block' }, width: '1px', height: 40, backgroundColor: theme.palette.divider }} />

            <Field label="Bedrooms" theme={theme}>
              <Select
                fullWidth
                variant="outlined"
                value={filters.beds || 'all'}
                onChange={(e) => handleChange('beds', e.target.value)}
                sx={{ ...fieldSx, '& .MuiSelect-select': { color: theme.palette.text.primary } }}
              >
                <MenuItem value="all">Any beds</MenuItem>
                <MenuItem value="1">1+</MenuItem>
                <MenuItem value="2">2+</MenuItem>
                <MenuItem value="3">3+</MenuItem>
                <MenuItem value="4">4+</MenuItem>
                <MenuItem value="5">5+</MenuItem>
              </Select>
            </Field>

            <Button
              onClick={onSearch}
              startIcon={<SearchIcon />}
              sx={{
                ml: { xs: 0, md: 2 },
                mt: { xs: 1.5, md: 0 },
                backgroundColor: '#1A4C9E',
                color: '#fff',
                fontWeight: 700,
                px: 4,
                py: 1.5,
                borderRadius: '12px',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 14px rgba(26, 76, 158, 0.4)',
                '&:hover': { 
                  backgroundColor: '#143B7A',
                  boxShadow: '0 6px 20px rgba(26, 76, 158, 0.5)',
                  transform: 'translateY(-1px)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              Search Properties
            </Button>
          </Box>
        </Box>

        {/* Stats */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: { xs: 3, md: 0 },
            mt: { xs: 4, md: 5 },
            maxWidth: 900,
            mx: 'auto',
            textAlign: 'center',
          }}
        >
          {stats.map((stat, idx) => (
            <Box
              key={stat.label}
              sx={{
                textAlign: 'center',
                borderRight: {
                  xs: 'none',
                  md: idx < stats.length - 1 ? '1px solid rgba(255,255,255,0.14)' : 'none',
                },
              }}
            >
              <Typography sx={{ fontWeight: 800, fontSize: { xs: '1.5rem', md: '2rem' } }}>
                {stat.value}
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
