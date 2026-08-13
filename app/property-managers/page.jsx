'use client';

import { useState, useMemo, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
  Avatar,
  Chip,
  Button,
  Divider,
  CircularProgress,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { getPropertyManagers } from '@/lib/api-service';

const APP_URL = 'https://app.manaja.solutions';

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

const avatarColors = ['#1A4C9E', '#143B7A', '#2A3A5E', '#0B4F6C', '#245c8f'];

export default function PropertyManagersPage() {
  const [query, setQuery] = useState('');
  const [managers, setManagers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadManagers() {
      try {
        setLoading(true);
        setError(null);
        const data = await getPropertyManagers();
        setManagers(data);
      } catch (err) {
        console.error('Failed to load property managers:', err);
        setError('Failed to load property managers. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    loadManagers();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return managers;
    return managers.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.company.toLowerCase().includes(q) ||
        m.location.toLowerCase().includes(q)
    );
  }, [query, managers]);

  return (
    <Box component="main" sx={{ backgroundColor: '#f6f7f9', minHeight: '100vh' }}>
      {/* Hero */}
      <Box sx={{ backgroundColor: '#16213E', color: '#fff', py: { xs: 5, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography
            sx={{ color: '#F5B70C', fontWeight: 700, letterSpacing: '0.08em', fontSize: '0.8rem', mb: 1.5 }}
          >
            VERIFIED PARTNERS
          </Typography>
          <Typography
            component="h1"
            sx={{ fontWeight: 800, fontSize: { xs: '1.9rem', md: '2.6rem' }, mb: 1.5, lineHeight: 1.15 }}
          >
            Property Managers
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.75)', maxWidth: 640, fontSize: { xs: '0.98rem', md: '1.05rem' }, lineHeight: 1.6 }}>
            Browse trusted property managers listing across Nigeria. Filter by name, company or location to
            find the right partner for your next home.
          </Typography>

          <Box sx={{ mt: { xs: 3, md: 4 }, maxWidth: 640 }}>
            <TextField
              fullWidth
              placeholder="Search by name, company or location"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: '#98a1af' }} />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  '& fieldset': { border: 'none' },
                },
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* Listing */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        {loading ? (
          <Box sx={{ py: 8, textAlign: 'center' }}>
            <CircularProgress sx={{ color: '#1A4C9E' }} />
            <Typography sx={{ mt: 2, color: '#4a5568' }}>Loading property managers...</Typography>
          </Box>
        ) : error ? (
          <Box sx={{ py: 8, textAlign: 'center', color: '#d32f2f' }}>
            <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', mb: 1 }}>Error</Typography>
            <Typography>{error}</Typography>
          </Box>
        ) : (
          <>
            <Typography sx={{ fontWeight: 700, color: '#16213E', mb: 3, fontSize: '1.05rem' }}>
              {filtered.length} property manager{filtered.length === 1 ? '' : 's'}
              <Box component="span" sx={{ color: '#98a1af', fontWeight: 500 }}>
                {'  '}across Nigeria
              </Box>
            </Typography>

            {filtered.length === 0 ? (
              <Box sx={{ py: 8, textAlign: 'center', color: '#4a5568' }}>
                <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', mb: 1 }}>No managers found</Typography>
                <Typography>Try a different name, company or location.</Typography>
              </Box>
            ) : (
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
                  gap: 3,
                }}
              >
                {filtered.map((m, idx) => (
                  <Box
                    key={m.id}
                    sx={{
                      backgroundColor: '#fff',
                      border: '1px solid #e7e9ee',
                      borderRadius: '16px',
                      p: 3,
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'box-shadow 0.2s, transform 0.2s',
                      '&:hover': { boxShadow: '0 12px 28px rgba(16,23,41,0.10)', transform: 'translateY(-3px)' },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Avatar
                        sx={{
                          bgcolor: avatarColors[idx % avatarColors.length],
                          width: 56,
                          height: 56,
                          fontWeight: 700,
                          fontSize: '1.1rem',
                        }}
                      >
                        {initials(m.name)}
                      </Avatar>
                      <Box sx={{ minWidth: 0 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <Typography sx={{ fontWeight: 700, color: '#16213E', fontSize: '1.02rem' }} noWrap>
                            {m.name}
                          </Typography>
                          {m.verified && <VerifiedIcon sx={{ fontSize: 18, color: '#1A4C9E' }} />}
                        </Box>
                        <Typography sx={{ color: '#4a5568', fontSize: '0.88rem' }} noWrap>
                          {m.company}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, color: '#4a5568', mb: 1 }}>
                      <LocationOnOutlinedIcon sx={{ fontSize: 18, color: '#98a1af' }} />
                      <Typography sx={{ fontSize: '0.9rem' }} noWrap>
                        {m.location}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#4a5568' }}>
                        <HomeWorkOutlinedIcon sx={{ fontSize: 18, color: '#98a1af' }} />
                        <Typography sx={{ fontSize: '0.9rem', fontWeight: 600 }}>{m.listings} listings</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25 }}>
                        <StarRoundedIcon sx={{ fontSize: 19, color: '#F5B70C' }} />
                        <Typography sx={{ fontSize: '0.9rem', fontWeight: 700, color: '#16213E' }}>
                          {m.rating.toFixed(1)}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 2.5 }}>
                      {m.specialties.map((s) => (
                        <Chip
                          key={s}
                          label={s}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(26,76,158,0.08)',
                            color: '#1A4C9E',
                            fontWeight: 600,
                            fontSize: '0.75rem',
                          }}
                        />
                      ))}
                    </Box>

                    <Divider sx={{ mb: 2 }} />

                    <Button
                      component="a"
                      href={`tel:${m.phone.replace(/\s/g, '')}`}
                      startIcon={<LocalPhoneOutlinedIcon />}
                      variant="contained"
                      sx={{
                        mt: 'auto',
                        backgroundColor: '#1A4C9E',
                        fontWeight: 700,
                        boxShadow: 'none',
                        '&:hover': { backgroundColor: '#143B7A', boxShadow: 'none' },
                      }}
                    >
                      Contact Manager
                    </Button>
                  </Box>
                ))}
              </Box>
            )}
          </>
        )}

        {/* Become a manager CTA */}
        <Box
          sx={{
            mt: { xs: 5, md: 7 },
            backgroundColor: '#fff',
            border: '1px solid #e7e9ee',
            borderRadius: '16px',
            p: { xs: 3, md: 5 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            gap: 3,
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 800, fontSize: { xs: '1.3rem', md: '1.6rem' }, color: '#16213E', mb: 1 }}>
              Are you a property manager?
            </Typography>
            <Typography sx={{ color: '#4a5568', maxWidth: 560 }}>
              Join Manaja and showcase your listings to thousands of verified buyers and renters across Nigeria.
            </Typography>
          </Box>
          <Button
            component="a"
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: '#F5B70C',
              color: '#16213E',
              fontWeight: 800,
              px: 4,
              py: 1.5,
              borderRadius: '10px',
              whiteSpace: 'nowrap',
              boxShadow: 'none',
              '&:hover': { backgroundColor: '#DBA200' },
            }}
          >
            List a property
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
