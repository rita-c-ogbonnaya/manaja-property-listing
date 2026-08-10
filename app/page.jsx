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
import { useLocationState } from '@/components/StateProvider';

const ITEMS_PER_PAGE = 6;

const emptyFilters = {
  search: '',
  state: 'all',
  type: 'all',
  beds: 'all',
  location: 'all',
  status: 'all',
  listingType: 'all',
};

const features = [
  {
    Icon: VerifiedUserOutlinedIcon,
    title: 'Verified Properties',
    text: 'Every property undergoes thorough verification, ensuring authenticity and availability for your peace of mind.',
  },
  {
    Icon: GroupsOutlinedIcon,
    title: 'Trusted Network',
    text: 'Connect with accredited real estate professionals and developers across Nigeria\'s prime locations.',
  },
  {
    Icon: TuneOutlinedIcon,
    title: 'Smart Search',
    text: 'Advanced filtering by location, price range, property type, and specifications to find your ideal space efficiently.',
  },
  {
    Icon: PaidOutlinedIcon,
    title: 'Zero Hidden Fees',
    text: 'Search, save favorites, and make inquiries without any charges — premium service at no cost to you.',
  },
];

export default function HomePage() {
  const { listingType: globalListingType, propertyType: globalPropertyType, locationFilter: globalLocationFilter, locationStateId: globalLocationStateId } = useLocationState();
  const [filters, setFilters] = useState(emptyFilters);
  const [displayedCount, setDisplayedCount] = useState(ITEMS_PER_PAGE);
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const listingsRef = useRef(null);

  // Sync filters with global state
  useEffect(() => {
    const newFilters = { ...emptyFilters };
    if (globalListingType && globalListingType !== 'all') {
      newFilters.listingType = globalListingType;
    }
    if (globalPropertyType && globalPropertyType !== 'all') {
      newFilters.type = globalPropertyType;
    }
    if (globalLocationFilter && globalLocationFilter !== 'all') {
      newFilters.location = globalLocationFilter;
    }
    if (globalLocationStateId && globalLocationStateId !== 'all') {
      newFilters.state = globalLocationStateId;
    }
    setFilters(newFilters);
  }, [globalListingType, globalPropertyType, globalLocationFilter, globalLocationStateId]);

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
          <Typography sx={{ color: '#1A4C9E', fontWeight: 700, letterSpacing: '0.08em', fontSize: '0.8rem', mb: 1 }}>
            CURATED SELECTION
          </Typography>
          <Typography component="h2" sx={{ fontWeight: 800, fontSize: { xs: '1.6rem', md: '2rem' }, color: '#0A1628', mb: 3 }}>
            Premium and Verified Property Listings
          </Typography>

          <FilterBar filters={filters} onFilterChange={setFilters} />

          <Typography variant="body2" sx={{ color: '#5A6478', mb: 3 }}>
            Displaying{' '}
            <Box component="span" sx={{ fontWeight: 700, color: '#0A1628' }}>
              {visibleProperties.length}
            </Box>{' '}
            of{' '}
            <Box component="span" sx={{ fontWeight: 700, color: '#0A1628' }}>
              {filteredProperties.length}
            </Box>{' '}
            available properties
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
                      backgroundColor: '#1A4C9E',
                      color: '#fff',
                      px: 4,
                      py: 1.4,
                      borderRadius: '12px',
                      fontWeight: 700,
                      boxShadow: '0 4px 12px rgba(26, 76, 158, 0.3)',
                      '&:hover': { 
                        backgroundColor: '#143B7A',
                        boxShadow: '0 6px 16px rgba(26, 76, 158, 0.4)',
                        transform: 'translateY(-1px)',
                      },
                      transition: 'all 0.2s ease',
                    }}
                  >
                    View More Properties
                  </Button>
                </Box>
              )}
            </>
          ) : (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h6" sx={{ mb: 1, color: '#0A1628', fontWeight: 700 }}>
                No Properties Available
              </Typography>
              <Typography variant="body2" sx={{ color: '#8A93A3', mb: 3 }}>
                Try adjusting your search criteria
              </Typography>
              <Button
                variant="outlined"
                onClick={() => setFilters(emptyFilters)}
                sx={{ color: '#1A4C9E', borderColor: '#1A4C9E', fontWeight: 700, borderRadius: '12px' }}
              >
                Clear All Filters
              </Button>
            </Box>
          )}
        </Container>
      </Box>

      {/* Explore by city */}
      <Box component="section" sx={{ backgroundColor: '#f6f7f9', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography sx={{ color: '#1A4C9E', fontWeight: 700, letterSpacing: '0.08em', fontSize: '0.8rem', mb: 1 }}>
            PRIME LOCATIONS
          </Typography>
          <Typography component="h2" sx={{ fontWeight: 800, fontSize: { xs: '1.6rem', md: '2rem' }, color: '#0A1628' }}>
            Browse by State
          </Typography>
          <Typography sx={{ color: '#5A6478', mb: 4, mt: 1 }}>
            Explore properties across Nigeria's most sought-after states and regions.
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
                    '&:hover': { borderColor: '#1A4C9E', boxShadow: '0 12px 28px rgba(16,23,41,0.1)' },
                  }}
                >
                  <Typography sx={{ color: '#1A4C9E', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.06em', mb: 1 }}>
                    ACTIVE LISTINGS
                  </Typography>
                  <Typography sx={{ fontWeight: 800, fontSize: '2rem', color: '#16213E', lineHeight: 1 }}>
                    {count}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1.5 }}>
                    <Box>
                      <Typography sx={{ fontWeight: 700, color: '#16213E' }}>{state.label}</Typography>
                      <Typography sx={{ color: '#8a93a3', fontSize: '0.85rem' }}>properties for sale &amp; rent</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#1A4C9E', fontWeight: 700, fontSize: '0.85rem' }}>
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
                    backgroundColor: 'rgba(26,76,158,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  <Icon sx={{ color: '#1A4C9E', fontSize: 26 }} />
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
