'use client';

import {
  Box,
  Container,
  Typography,
  Link as MuiLink,
  Divider,
  Button,
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/Mail';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import Logo from '@/components/Logo';

const APP_URL = 'https://app.manaja.solutions';
const SITE_URL = 'https://manaja.solutions';

const linkSx = {
  color: 'rgba(255,255,255,0.7)',
  textDecoration: 'none',
  fontSize: '0.92rem',
  '&:hover': {
    color: '#fff',
  },
};

const columns = [
  {
    title: 'Featured Searches',
    links: [
      {
        label: 'About Us',
        href: `${SITE_URL}/about`,
      },
      {
        label: 'Our Services',
        href: `${SITE_URL}/modules`,
      },
      {
        label: 'Contact Us',
        href: `${SITE_URL}/contact`,
      },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      {
        label: 'Trusted Partners',
        href: '/property-managers',
      },
      {
        label: 'Properties for Sale',
        href: '/',
      },
      {
        label: 'Rental Properties',
        href: '/',
      },
      {
        label: 'Short-term Stays',
        href: '/',
      },
    ],
  },
  {
    title: 'For Professionals',
    links: [
      {
        label: 'Partner With Us',
        href: APP_URL,
        external: true,
      },
      {
        label: 'List Your Property',
        href: APP_URL,
        external: true,
      },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#0A1628',
        color: '#fff',
      }}
    >
      {/* List CTA */}
      <Box
        id="list"
        sx={{
          backgroundColor: '#0A1628',
          color: '#fff',
          py: { xs: 6, md: 8 },
        }}
      >
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
              <Typography
                sx={{
                  color: '#F5B70C',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  fontSize: '0.8rem',
                  mb: 1,
                }}
              >
                PARTNER WITH MANAJA
              </Typography>

              <Typography
                component="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: {
                    xs: '1.6rem',
                    md: '2rem',
                  },
                  mb: 1,
                }}
              >
                Property Professional or Developer?
              </Typography>

              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  maxWidth: 520,
                  lineHeight: 1.7,
                }}
              >
                Showcase your properties to qualified buyers and tenants
                actively searching in Nigeria&apos;s premium real estate
                market.
              </Typography>
            </Box>

            <Button
              component="a"
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: '#F5B70C',
                color: '#0A1628',
                fontWeight: 800,
                px: 4,
                py: 1.5,
                borderRadius: '12px',
                whiteSpace: 'nowrap',
                boxShadow:
                  '0 4px 14px rgba(245, 183, 12, 0.4)',
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: '#DBA200',
                  boxShadow:
                    '0 6px 20px rgba(245, 183, 12, 0.5)',
                  transform: 'translateY(-1px)',
                },
              }}
            >
              List Your Property
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Main Footer */}
      <Box
        sx={{
          backgroundColor: '#0A1628',
          color: '#fff',
          py: { xs: 5, md: 7 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: '1.6fr repeat(3, 1fr)',
              },
              gap: 4,
            }}
          >
            {/* Company Information */}
            <Box>
              <Box sx={{ mb: 2 }}>
                <Logo
                  variant="light"
                  size={34}
                />
              </Box>

              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '0.92rem',
                  lineHeight: 1.7,
                  mb: 2,
                  maxWidth: 320,
                }}
              >
                Manaja Solutions provides access to premium real estate
                opportunities across Nigeria&apos;s prime locations,
                curated excellence for discerning clients.
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1.25,
                }}
              >
                {/* Email */}
                {/* <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1,
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  <MailOutlineIcon
                    sx={{
                      fontSize: 18,
                      mt: '2px',
                    }}
                  />

                  <MuiLink
                    href="mailto:hello@manaja.solutions"
                    sx={{
                      ...linkSx,
                      fontSize: '0.9rem',
                    }}
                  >
                    hello@manaja.solutions
                  </MuiLink>
                </Box> */}

                {/* Phone */}
                {/* <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1,
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  <LocalPhoneOutlinedIcon
                    sx={{
                      fontSize: 18,
                      mt: '2px',
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: '0.9rem',
                    }}
                  >
                    +234 (814) 694-6985
                    {'  |  '}
                    +250 (793) 149-988
                  </Typography>
                </Box>
              </Box>
            </Box> */}

            {/* Footer Columns */}
            {columns.map((col) => (
              <Box key={col.title}>
                <Typography
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    fontSize: '0.95rem',
                  }}
                >
                  {col.title}
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.25,
                  }}
                >
                  {col.links.map((item) => (
                    <MuiLink
                      key={item.label}
                      href={item.href}
                      {...(item.external
                        ? {
                            target: '_blank',
                            rel: 'noopener noreferrer',
                          }
                        : {})}
                      sx={linkSx}
                    >
                      {item.label}
                    </MuiLink>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>

          {/* Divider */}
          <Divider
            sx={{
              borderColor: 'rgba(255,255,255,0.12)',
              my: 4,
            }}
          />

          {/* Footer Bottom */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              justifyContent: 'space-between',
              alignItems: {
                xs: 'flex-start',
                sm: 'center',
              },
              gap: 1.5,
            }}
          >
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.55)',
                fontSize: '0.85rem',
              }}
            >
              © {currentYear} Manaja Solution Limited. All rights reserved.
            </Typography>




{/* Contact Information */} <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: { xs: 1.5, sm: 2.5 }, }} > {/* Email */} <MuiLink href="mailto:hello@manaja.solutions" sx={{ ...linkSx, display: 'flex', alignItems: 'center', gap: 0.75, fontSize: '0.85rem', }} > <MailOutlineIcon sx={{ fontSize: 16 }} /> hello@manaja.solutions </MuiLink> {/* Phone */} <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 0.75, whiteSpace: 'nowrap', }} > <LocalPhoneOutlinedIcon sx={{ fontSize: 16 }} /> +234 (814) 694-6985 {' | '} +250 (793) 149-988 </Typography> </Box>
            

            <Box
              sx={{
                display: 'flex',
                gap: 3,
              }}
            >
              <MuiLink
                href={`${SITE_URL}/terms`}
                target="_blank"
                rel="noopener noreferrer"
                sx={linkSx}
              >
                Terms
              </MuiLink>

              <MuiLink
                href={`${SITE_URL}/privacy`}
                target="_blank"
                rel="noopener noreferrer"
                sx={linkSx}
              >
                Privacy
              </MuiLink>

              <MuiLink
                href={`${SITE_URL}/cookies`}
                target="_blank"
                rel="noopener noreferrer"
                sx={linkSx}
              >
                Cookies
              </MuiLink>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

