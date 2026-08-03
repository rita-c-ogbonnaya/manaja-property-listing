'use client';

import { Box, Container, Typography, Link as MuiLink, Divider, Button } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/Mail';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import Logo from '@/components/Logo';

const APP_URL = 'https://app.manaja.solutions';
const SITE_URL = 'https://manaja.solutions';

const linkSx = {
  color: 'rgba(255,255,255,0.7)',
  textDecoration: 'none',
  fontSize: '0.92rem',
  '&:hover': { color: '#fff' },
};

const columns = [
  {
    title: 'Popular Property',
    links: [
      { label: 'Flats for rent in Lagos', href: '/' },
      { label: 'Houses for sale in Abuja', href: '/' },
      { label: 'Land in Lekki', href: '/' },
      { label: 'Shortlets in Ikoyi', href: '/' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Property managers', href: '/property-managers' },
      { label: 'For sale', href: '/' },
      { label: 'For rent', href: '/' },
      { label: 'Shortlets', href: '/' },
    ],
  },
  {
    title: 'For Managers',
    links: [
      { label: 'Advertise your property', href: APP_URL, external: true },
      { label: 'List a property', href: APP_URL, external: true },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" id="contact">
      {/* List CTA band */}
      <Box id="list" sx={{ backgroundColor: '#0F1729', color: '#fff', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'center' },
              justifyContent: 'space-between',
              gap: 3,
            }}
          >
            <Box>
              <Typography sx={{ color: '#F5B70C', fontWeight: 700, letterSpacing: '0.08em', fontSize: '0.8rem', mb: 1 }}>
                LIST WITH MANAJA
              </Typography>
              <Typography component="h2" sx={{ fontWeight: 800, fontSize: { xs: '1.6rem', md: '2rem' }, mb: 1 }}>
                Are you a property manager or developer?
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.7)', maxWidth: 520 }}>
                List your properties on Manaja and put them in front of thousands of serious buyers and renters every day.
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

      {/* Main footer */}
      <Box sx={{ backgroundColor: '#16213E', color: '#fff', py: { xs: 5, md: 7 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: '1.6fr repeat(3, 1fr)' },
              gap: 4,
            }}
          >
            <Box>
              <Box sx={{ mb: 2 }}>
                <Logo variant="light" size={34} />
              </Box>
              <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.92rem', lineHeight: 1.7, mb: 2, maxWidth: 320 }}>
                Manaja connects you with verified properties across Lagos, Abuja and beyond — expertly curated and intelligently matched to your needs.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, color: 'rgba(255,255,255,0.7)' }}>
                  <MailOutlineIcon sx={{ fontSize: 18, mt: '2px' }} />
                  <MuiLink href="mailto:hello@manaja.solutions" sx={{ ...linkSx, fontSize: '0.9rem' }}>
                    hello@manaja.solutions
                  </MuiLink>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, color: 'rgba(255,255,255,0.7)' }}>
                  <LocalPhoneOutlinedIcon sx={{ fontSize: 18, mt: '2px' }} />
                  <Typography sx={{ fontSize: '0.9rem' }}>
                    +234 (814) 694-6985{'  |  '}+250 (793) 149-988
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, color: 'rgba(255,255,255,0.7)' }}>
                  <LocationOnOutlinedIcon sx={{ fontSize: 18, mt: '2px' }} />
                  <Typography sx={{ fontSize: '0.9rem' }}>Global: Remote-First</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, color: 'rgba(255,255,255,0.7)' }}>
                  <ScheduleOutlinedIcon sx={{ fontSize: 18, mt: '2px' }} />
                  <Typography sx={{ fontSize: '0.9rem' }}>Monday – Friday, 9AM – 5PM GMT+1</Typography>
                </Box>
              </Box>
            </Box>

            {columns.map((col) => (
              <Box key={col.title}>
                <Typography sx={{ fontWeight: 700, mb: 2, fontSize: '0.95rem' }}>{col.title}</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                  {col.links.map((item) => (
                    <MuiLink
                      key={item.label}
                      href={item.href}
                      {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      sx={linkSx}
                    >
                      {item.label}
                    </MuiLink>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>

          <Divider sx={{ borderColor: 'rgba(255,255,255,0.12)', my: 4 }} />

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', sm: 'center' },
              gap: 1.5,
            }}
          >
            <Typography sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem' }}>
              © {currentYear} Manaja. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', gap: 3 }}>
              <MuiLink href={`${SITE_URL}/terms`} target="_blank" rel="noopener noreferrer" sx={linkSx}>
                Terms
              </MuiLink>
              <MuiLink href={`${SITE_URL}/privacy`} target="_blank" rel="noopener noreferrer" sx={linkSx}>
                Privacy
              </MuiLink>
              <MuiLink href={`${SITE_URL}/cookies`} target="_blank" rel="noopener noreferrer" sx={linkSx}>
                Cookies
              </MuiLink>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
