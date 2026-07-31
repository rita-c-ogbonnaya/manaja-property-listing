'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import PropertyCard from '@/components/PropertyCard';
import FilterBar from '@/components/FilterBar';
import Hero from '@/components/Hero';
import BrowseByType from '@/components/BrowseByType';
import { properties, filterProperties, states } from '@/lib/mock-data';

const ITEMS_PER_PAGE = 6;

const emptyFilters = {
  search: '',
  state: 'all',
  type: 'all',
  beds: 'all',
  location: 'all',
  status: 'all',
};

const features = [
  {
    Icon: VerifiedUserOutlinedIcon,
    title: 'Verified listings',
    text: 'Every listing is screened by our team, so you only see homes that are real and available.',
  },
  {
    Icon: GroupsOutlinedIcon,
    title: 'Trusted managers',
    text: 'Connect directly with vetted property managers and developers across the country.',
  },
  {
    Icon: TuneOutlinedIcon,
    title: 'Powerful search',
    text: 'Filter by location, budget, property type and beds to find the right place fast.',
  },
  {
    Icon: PaidOutlinedIcon,
    title: 'Free for seekers',
    text: 'Browsing, saving and enquiring on any property is completely free — no fees, ever.',
  },
];

export default function HomePage() {
  const [filters, setFilters] = useState(emptyFilters);
  const [displayedCount, setDisplayedCount] = useState(ITEMS_PER_PAGE);
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const listingsRef = useRef(null);

  useEffect(() => {
    setFilteredProperties(filterProperties(filters));
    setDisplayedCount(ITEMS_PER_PAGE);
  }, [filters]);

  const stats = useMemo(() => {
    const areas = new Set(properties.map((p) => p.location.split(',')[0].trim()));
    const managers = new Set(properties.map((p) => p.manager.name));
    return [
      { value: `${properties.length}+`, label: 'Active listings' },
      { value: `${managers.size}+`, label: 'Property managers' },
      { value: `${areas.size}+`, label: 'Areas covered' },
      { value: `${states.length}`, label: 'States covered' },
    ];
  }, []);

  const visibleProperties = filteredProperties.slice(0, displayedCount);
  const hasMore = displayedCount < filteredProperties.length;

  const scrollToListings = () => {
    listingsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleCategorySelect = (type) => {
    setFilters({ ...emptyFilters, type });
    setTimeout(scrollToListings, 50);
  };

  const handleStateSelect = (stateId) => {
    setFilters({ ...emptyFilters, state: stateId });
    setTimeout(scrollToListings, 50);
  };

  return (
    <Box sx={{ backgroundColor: '#f6f7f9' }}>
      <Hero filters={filters} onFilterChange={setFilters} onSearch={scrollToListings} stats={stats} />

      <BrowseByType onSelect={handleCategorySelect} />

      {/* Listings */}
      <Box ref={listingsRef} component="section" sx={{ py: { xs: 6, md: 8 }, scrollMarginTop: 80 }}>
        <Container maxWidth="lg">
          <Typography sx={{ color: '#E23744', fontWeight: 700, letterSpacing: '0.08em', fontSize: '0.8rem', mb: 1 }}>
            HANDPICKED FOR YOU
          </Typography>
          <Typography component="h2" sx={{ fontWeight: 800, fontSize: { xs: '1.6rem', md: '2rem' }, color: '#16213E', mb: 3 }}>
            Featured properties
          </Typography>

          <FilterBar filters={filters} onFilterChange={setFilters} />

          <Typography variant="body2" sx={{ color: '#5b6472', mb: 3 }}>
            Showing{' '}
            <Box component="span" sx={{ fontWeight: 700, color: '#16213E' }}>
              {visibleProperties.length}
            </Box>{' '}
            of{' '}
            <Box component="span" sx={{ fontWeight: 700, color: '#16213E' }}>
              {filteredProperties.length}
            </Box>{' '}
            properties
          </Typography>

          {visibleProperties.length > 0 ? (
            <>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                  gap: 3,
                }}
              >
                {visibleProperties.map((property) => (
                  <PropertyCard property={property} key={property.id} />
                ))}
              </Box>

              {hasMore && (
                <Box sx={{ textAlign: 'center', mt: 6 }}>
                  <Button
                    onClick={() => setDisplayedCount((prev) => prev + ITEMS_PER_PAGE)}
                    sx={{
                      backgroundColor: '#16213E',
                      color: '#fff',
                      px: 4,
                      py: 1.4,
                      borderRadius: '10px',
                      fontWeight: 700,
                      boxShadow: 'none',
                      '&:hover': { backgroundColor: '#0F1729' },
                    }}
                  >
                    Load more properties
                  </Button>
                </Box>
              )}
            </>
          ) : (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h6" sx={{ mb: 1, color: '#16213E', fontWeight: 700 }}>
                No properties found
              </Typography>
              <Typography variant="body2" sx={{ color: '#8a93a3', mb: 3 }}>
                Try adjusting your filters
              </Typography>
              <Button
                variant="outlined"
                onClick={() => setFilters(emptyFilters)}
                sx={{ color: '#E23744', borderColor: '#E23744', fontWeight: 700, borderRadius: '10px' }}
              >
                Reset filters
              </Button>
            </Box>
          )}
        </Container>
      </Box>

      {/* Explore by city */}
      <Box component="section" sx={{ backgroundColor: '#f6f7f9', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography sx={{ color: '#E23744', fontWeight: 700, letterSpacing: '0.08em', fontSize: '0.8rem', mb: 1 }}>
            POPULAR LOCATIONS
          </Typography>
          <Typography component="h2" sx={{ fontWeight: 800, fontSize: { xs: '1.6rem', md: '2rem' }, color: '#16213E' }}>
            Explore property by state
          </Typography>
          <Typography sx={{ color: '#5b6472', mb: 4, mt: 1 }}>
            Discover where your next home could be, from buzzing cities to quiet neighbourhoods.
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 2 }}>
            {states.map((state) => {
              const count = properties.filter((p) => p.state === state.id).length;
              return (
                <Box
                  key={state.id}
                  onClick={() => handleStateSelect(state.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') handleStateSelect(state.id);
                  }}
                  role="button"
                  tabIndex={0}
                  sx={{
                    backgroundColor: '#fff',
                    border: '1px solid #e7e9ee',
                    borderRadius: '14px',
                    p: 3,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    '&:hover': { borderColor: '#E23744', boxShadow: '0 12px 28px rgba(16,23,41,0.1)' },
                  }}
                >
                  <Typography sx={{ color: '#E23744', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.06em', mb: 1 }}>
                    AVAILABLE NOW
                  </Typography>
                  <Typography sx={{ fontWeight: 800, fontSize: '2rem', color: '#16213E', lineHeight: 1 }}>
                    {count}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1.5 }}>
                    <Box>
                      <Typography sx={{ fontWeight: 700, color: '#16213E' }}>{state.label}</Typography>
                      <Typography sx={{ color: '#8a93a3', fontSize: '0.85rem' }}>properties for sale &amp; rent</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#E23744', fontWeight: 700, fontSize: '0.85rem' }}>
                      Explore <ArrowForwardIcon sx={{ fontSize: 16 }} />
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* Why choose */}
      <Box id="about" component="section" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: 5 }}>
            <Typography component="h2" sx={{ fontWeight: 800, fontSize: { xs: '1.6rem', md: '2.25rem' }, color: '#16213E' }}>
              A smarter, safer way to find property
            </Typography>
            <Typography sx={{ color: '#5b6472', mt: 1.5 }}>
              We built Manaja to take the guesswork and risk out of house-hunting in Nigeria.
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 4 }}>
            {features.map(({ Icon, title, text }) => (
              <Box key={title}>
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: '14px',
                    backgroundColor: 'rgba(226,55,68,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  <Icon sx={{ color: '#E23744', fontSize: 26 }} />
                </Box>
                <Typography sx={{ fontWeight: 700, color: '#16213E', fontSize: '1.05rem', mb: 1 }}>{title}</Typography>
                <Typography sx={{ color: '#5b6472', fontSize: '0.92rem', lineHeight: 1.6 }}>{text}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
