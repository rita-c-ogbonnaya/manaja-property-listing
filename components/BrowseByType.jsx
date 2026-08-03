'use client';

import { Box, Container, Typography } from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HouseIcon from '@mui/icons-material/House';
import VillaIcon from '@mui/icons-material/Villa';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import DomainIcon from '@mui/icons-material/Domain';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { properties } from '@/lib/mock-data';

const categories = [
  { type: 'Apartment', label: 'Apartments', Icon: ApartmentIcon },
  { type: 'Detached House', label: 'Detached Houses', Icon: HouseIcon },
  { type: 'Townhouse', label: 'Townhouses', Icon: HolidayVillageIcon },
  { type: 'Penthouse', label: 'Penthouses', Icon: DomainIcon },
  { type: 'Mansion', label: 'Mansions', Icon: VillaIcon },
  { type: 'Studio', label: 'Studios', Icon: MeetingRoomIcon },
];

function countFor(type) {
  return properties.filter((p) => p.type === type).length;
}

export default function BrowseByType({ onSelect }) {
  return (
    <Box component="section" sx={{ backgroundColor: '#f6f7f9', py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography
          sx={{ color: '#1A4C9E', fontWeight: 700, letterSpacing: '0.08em', fontSize: '0.8rem', mb: 1 }}
        >
          PROPERTY CATEGORIES
        </Typography>
        <Typography component="h2" sx={{ fontWeight: 800, fontSize: { xs: '1.6rem', md: '2rem' }, color: '#0A1628' }}>
          Find Your Ideal Property Type
        </Typography>
        <Typography sx={{ color: '#5A6478', mb: 4, mt: 1 }}>
          Select a category to explore properties that match your lifestyle and investment goals.
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', lg: 'repeat(6, 1fr)' },
            gap: 2,
          }}
        >
          {categories.map(({ type, label, Icon }) => (
            <Box
              key={type}
              onClick={() => onSelect(type)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') onSelect(type);
              }}
              sx={{
                backgroundColor: '#fff',
                border: '1px solid #e7e9ee',
                borderRadius: '14px',
                p: 2.5,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': {
                  borderColor: '#1A4C9E',
                  boxShadow: '0 12px 28px rgba(16, 23, 41, 0.1)',
                  transform: 'translateY(-3px)',
                },
              }}
            >
              <Box
                sx={{
                  width: 46,
                  height: 46,
                  borderRadius: '12px',
                  backgroundColor: 'rgba(26,76,158,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                <Icon sx={{ color: '#1A4C9E', fontSize: 24 }} />
              </Box>
              <Typography sx={{ fontWeight: 700, color: '#16213E', fontSize: '1rem' }}>{label}</Typography>
              <Typography sx={{ color: '#8a93a3', fontSize: '0.85rem', mt: 0.25 }}>
                {countFor(type)} listings
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
