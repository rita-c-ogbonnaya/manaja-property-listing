// app/property-managers/page.js

'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
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
import { useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { getPublicManagers } from '@/lib/api-service';

const APP_URL = 'https://app.manaja.solutions';

function initials(name) {
  if (!name) return 'PM';
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

const avatarColors = ['#1A4C9E', '#143B7A', '#2A3A5E', '#0B4F6C', '#245c8f'];

export default function PropertyManagersPage() {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const [query, setQuery] = useState('');
  const [managers, setManagers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadManagers() {
      try {
        setLoading(true);
        setError(null);
        const data = await getPublicManagers();
        setManagers(data || []);
      } catch (err) {
        console.error('Failed to load managers:', err);
        setError('Unable to load property managers. Please try again later.');
        setManagers([]);
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
        (m.name || '').toLowerCase().includes(q) ||
        (m.company || '').toLowerCase().includes(q) ||
        (m.location || '').toLowerCase().includes(q)
    );
  }, [query, managers]);

  return (
    <Box component="main" sx={{ backgroundColor: theme.palette.background.default, minHeight: '100vh' }}>
      {/* Hero */}
      <Box sx={{ backgroundColor: '#16213E', color: '#fff', py: { xs: 4, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography
            sx={{ color: '#F5B70C', fontWeight: 700, letterSpacing: '0.08em', fontSize: { xs: '0.75rem', md: '0.8rem' }, mb: 1.5 }}
          >
            VERIFIED PARTNERS
          </Typography>
          <Typography
            component="h1"
            sx={{ fontWeight: 800, fontSize: { xs: '1.6rem', md: '2.6rem' }, mb: 1.5, lineHeight: 1.15 }}
          >
            Property Managers
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.75)', maxWidth: { xs: '100%', md: 640 }, fontSize: { xs: '0.9rem', md: '1.05rem' }, lineHeight: 1.6 }}>
            Browse trusted property managers listing across Africa. Filter by name, company or location to
            find the right partner for your next home.
          </Typography>

          <Box sx={{ mt: { xs: 3, md: 4 }, maxWidth: { xs: '100%', md: 640 } }}>
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
                backgroundColor: mode === 'dark' ? '#161B22' : '#fff',
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
      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
        {loading ? (
          <Box sx={{ py: 8, textAlign: 'center' }}>
            <CircularProgress sx={{ color: '#1A4C9E' }} />
            <Typography sx={{ mt: 2, color: theme.palette.text.secondary }}>Loading property managers...</Typography>
          </Box>
        ) : error ? (
          <Box sx={{ py: 8, textAlign: 'center', color: '#d32f2f' }}>
            <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', mb: 1 }}>Error</Typography>
            <Typography>{error}</Typography>
          </Box>
        ) : (
          <>
            <Typography sx={{ fontWeight: 700, color: theme.palette.text.primary, mb: 3, fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
              {filtered.length} property manager{filtered.length === 1 ? '' : 's'} across Africa.
            </Typography>

            {filtered.length === 0 ? (
              <Box sx={{ py: 8, textAlign: 'center', color: theme.palette.text.secondary }}>
                <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', mb: 1 }}>
                  {managers.length === 0 ? 'No property managers available' : 'No managers found'}
                </Typography>
                <Typography>
                  {managers.length === 0 
                    ? 'Property managers will appear here once they are registered on the platform.'
                    : 'Try a different name, company or location.'}
                </Typography>
              </Box>
            ) : (
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
                  gap: { xs: 2, md: 3 },
                }}
              >
                {filtered.map((m, idx) => (
                  <Link
                    key={m.id}
                    href={`/property-managers/${m.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <Box
                      sx={{
                        backgroundColor: theme.palette.background.paper,
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: '16px',
                        p: { xs: 2, md: 3 },
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer',
                        '&:hover': { 
                          boxShadow: mode === 'dark' ? '0 12px 28px rgba(0, 0, 0, 0.4)' : '0 12px 28px rgba(16,23,41,0.10)',
                          transform: 'translateY(-3px)',
                          borderColor: '#1A4C9E',
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <Avatar
                          sx={{
                            bgcolor: avatarColors[idx % avatarColors.length],
                            width: { xs: 48, md: 56 },
                            height: { xs: 48, md: 56 },
                            fontWeight: 700,
                            fontSize: { xs: '1rem', md: '1.1rem' },
                          }}
                        >
                          {initials(m.name || 'Property Manager')}
                        </Avatar>
                        <Box sx={{ minWidth: 0 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <Typography sx={{ fontWeight: 700, color: theme.palette.text.primary, fontSize: { xs: '0.95rem', md: '1.02rem' } }} noWrap>
                              {m.name || 'Property Manager'}
                            </Typography>
                            {m.is_verified && <VerifiedIcon sx={{ fontSize: 18, color: '#1A4C9E' }} />}
                          </Box>
                          <Typography sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.8rem', md: '0.88rem' } }} noWrap>
                            {m.company || 'Independent'}
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, color: theme.palette.text.secondary, mb: 1 }}>
                        <LocationOnOutlinedIcon sx={{ fontSize: 18, color: theme.palette.text.secondary }} />
                        <Typography sx={{ fontSize: '0.9rem' }} noWrap>
                          {m.location || 'Location not specified'}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: theme.palette.text.secondary }}>
                          <HomeWorkOutlinedIcon sx={{ fontSize: 18, color: theme.palette.text.secondary }} />
                          <Typography sx={{ fontSize: { xs: '0.85rem', md: '0.9rem' }, fontWeight: 600 }}>{m.listing_count || 0} listings</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25 }}>
                          <StarRoundedIcon sx={{ fontSize: 19, color: '#F5B70C' }} />
                          <Typography sx={{ fontSize: { xs: '0.85rem', md: '0.9rem' }, fontWeight: 700, color: theme.palette.text.primary }}>
                            {(m.rating || 0).toFixed(1)}
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2.5 }}>
                        {(m.specialties || []).map((s) => (
                          <Chip
                            key={s}
                            label={s}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(26,76,158,0.08)',
                              color: '#1A4C9E',
                              fontWeight: 600,
                              fontSize: { xs: '0.7rem', md: '0.75rem' },
                            }}
                          />
                        ))}
                      </Box>

                      <Divider sx={{ mb: 2, borderColor: theme.palette.divider }} />

                      <Button
                        component="div"
                        endIcon={<ArrowForwardIcon />}
                        variant="contained"
                        sx={{
                          mt: 'auto',
                          backgroundColor: '#1A4C9E',
                          fontWeight: 700,
                          boxShadow: 'none',
                          '&:hover': { backgroundColor: '#143B7A', boxShadow: 'none' },
                        }}
                      >
                        View Properties
                      </Button>
                    </Box>
                  </Link>
                ))}
              </Box>
            )}
          </>
        )}

        {/* Become a manager CTA */}
        <Box
          sx={{
            mt: { xs: 4, md: 7 },
            backgroundColor: theme.palette.background.paper,
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: '16px',
            p: { xs: 2.5, md: 5 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            gap: 3,
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 800, fontSize: { xs: '1.2rem', md: '1.6rem' }, color: theme.palette.text.primary, mb: 1 }}>
              Are you a property manager?
            </Typography>
            <Typography sx={{ color: theme.palette.text.secondary, maxWidth: { xs: '100%', md: 560 } }}>
              Join Manaja and showcase your listings to thousands of verified buyers and renters across Africa.
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
              px: { xs: 3, md: 4 },
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