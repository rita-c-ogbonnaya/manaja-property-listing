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
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
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

const tabs = ['Buy', 'Rent', 'Shortlet', 'Joint Venture'];

const fieldSx = {
  '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
  '& .MuiSelect-select': { py: 0.5, fontWeight: 600, color: '#16213E' },
  fontSize: '0.95rem',
};

function Field({ label, children }) {
  return (
    <Box sx={{ px: { xs: 0, md: 2.5 }, py: { xs: 1, md: 0 }, flex: 1, minWidth: 0 }}>
      <InputLabel
        sx={{
          fontSize: '0.7rem',
          fontWeight: 700,
          letterSpacing: '0.06em',
          color: '#8a93a3',
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

export default function Hero({ filters, onFilterChange, onSearch, stats }) {
  const [activeTab, setActiveTab] = useState('Buy');

  const handleChange = (field, value) => {
    onFilterChange({ ...filters, [field]: value });
  };

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        background:
          'radial-gradient(120% 120% at 85% 0%, rgba(226, 55, 68, 0.35) 0%, rgba(226, 55, 68, 0) 45%), linear-gradient(160deg, #16213E 0%, #0F1729 100%)',
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
            <VerifiedUserOutlinedIcon sx={{ fontSize: 16, color: '#EA5B65' }} />
            Nigeria&apos;s property marketplace
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
          Find the right property
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
          Search thousands of homes, land and commercial property for sale and rent — across every major city in Nigeria.
        </Typography>

        {/* Search Card */}
        <Box
          sx={{
            backgroundColor: '#fff',
            borderRadius: '16px',
            p: { xs: 2, md: 2.5 },
            boxShadow: '0 24px 60px rgba(15, 23, 41, 0.35)',
            maxWidth: 1000,
            mx: 'auto',
          }}
        >
          {/* Tabs */}
          <Box sx={{ display: 'flex', gap: { xs: 1.5, md: 3 }, mb: 2, flexWrap: 'wrap' }}>
            {tabs.map((tab) => (
              <Box
                key={tab}
                onClick={() => setActiveTab(tab)}
                role="button"
                tabIndex={0}
                sx={{
                  cursor: 'pointer',
                  px: 1.5,
                  py: 0.75,
                  borderRadius: 999,
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  color: activeTab === tab ? '#E23744' : '#5b6472',
                  backgroundColor: activeTab === tab ? 'rgba(226,55,68,0.1)' : 'transparent',
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
              backgroundColor: '#f6f7f9',
              borderRadius: '12px',
              p: { xs: 1.5, md: 1 },
              gap: { xs: 0, md: 0 },
            }}
          >
            <Field label="Location">
              <Select
                fullWidth
                variant="outlined"
                value={filters.state || 'all'}
                onChange={(e) => handleChange('state', e.target.value)}
                sx={fieldSx}
              >
                <MenuItem value="all">Any location</MenuItem>
                {states.map((s) => (
                  <MenuItem key={s.id} value={s.id}>
                    {s.label}
                  </MenuItem>
                ))}
              </Select>
            </Field>

            <Box sx={{ display: { xs: 'none', md: 'block' }, width: '1px', height: 40, backgroundColor: '#e2e5ea' }} />

            <Field label="Property Type">
              <Select
                fullWidth
                variant="outlined"
                value={filters.type || 'all'}
                onChange={(e) => handleChange('type', e.target.value)}
                sx={fieldSx}
              >
                <MenuItem value="all">Any type</MenuItem>
                {propertyTypes.map((t) => (
                  <MenuItem key={t} value={t}>
                    {t}
                  </MenuItem>
                ))}
              </Select>
            </Field>

            <Box sx={{ display: { xs: 'none', md: 'block' }, width: '1px', height: 40, backgroundColor: '#e2e5ea' }} />

            <Field label="Bedrooms">
              <Select
                fullWidth
                variant="outlined"
                value={filters.beds || 'all'}
                onChange={(e) => handleChange('beds', e.target.value)}
                sx={fieldSx}
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
                backgroundColor: '#E23744',
                color: '#fff',
                fontWeight: 700,
                px: 4,
                py: 1.5,
                borderRadius: '10px',
                whiteSpace: 'nowrap',
                boxShadow: 'none',
                '&:hover': { backgroundColor: '#C42B37' },
              }}
            >
              Search
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
