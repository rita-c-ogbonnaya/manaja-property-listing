'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  IconButton,
  Divider,
  Popper,
  Paper,
  Collapse,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import TerrainOutlinedIcon from '@mui/icons-material/TerrainOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Logo from '@/components/Logo';

const APP_URL = 'https://app.manaja.solutions';

const propertyTypes = [
  { label: 'Houses', Icon: HomeOutlinedIcon },
  { label: 'Flats / Apartments', Icon: ApartmentOutlinedIcon },
  { label: 'Lands', Icon: TerrainOutlinedIcon },
  { label: 'Commercial Property', Icon: BusinessOutlinedIcon },
];

const locations = ['Lagos', 'Abuja', 'Kaduna', 'Oyo', 'Rivers'];

const dropdownNav = [
  { label: 'For Sale', key: 'sale' },
  { label: 'For Rent', key: 'rent' },
  { label: 'Shortlets', key: 'shortlet' },
];

function MegaMenu({ onNavigate }) {
  return (
    <Box sx={{ width: 320, py: 1 }}>
      {propertyTypes.map(({ label, Icon }) => (
        <ListItemButton
          key={label}
          component={Link}
          href="/"
          onClick={onNavigate}
          sx={{ px: 2.5, py: 1.1, gap: 1.5, color: '#16213E' }}
        >
          <Icon sx={{ fontSize: 22, color: '#1A4C9E' }} />
          <Typography sx={{ fontWeight: 600, fontSize: '0.95rem' }}>{label}</Typography>
        </ListItemButton>
      ))}

      <Typography
        sx={{
          px: 2.5,
          pt: 2,
          pb: 1,
          fontSize: '0.7rem',
          fontWeight: 700,
          letterSpacing: '0.09em',
          color: '#98a1af',
        }}
      >
        BROWSE BY LOCATION
      </Typography>
      {locations.map((loc) => (
        <ListItemButton
          key={loc}
          component={Link}
          href="/"
          onClick={onNavigate}
          sx={{ px: 2.5, py: 0.9, color: '#4a5568' }}
        >
          <Typography sx={{ fontWeight: 600, fontSize: '0.92rem' }}>{loc}</Typography>
        </ListItemButton>
      ))}

      <Divider sx={{ my: 1 }} />
      <ListItemButton
        component={Link}
        href="/"
        onClick={onNavigate}
        sx={{ px: 2.5, py: 1, gap: 1, color: '#1A4C9E' }}
      >
        <ArrowForwardIcon sx={{ fontSize: 20 }} />
        <Typography sx={{ fontWeight: 700, fontSize: '0.92rem' }}>View All</Typography>
      </ListItemButton>
    </Box>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);
  const closeDrawer = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  const handleMenuOpen = (event, key) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(key);
  };
  const handleMenuClose = () => {
    setOpenMenu(null);
    setAnchorEl(null);
  };

  const toggleMobileSection = (key) => {
    setMobileExpanded((prev) => (prev === key ? null : key));
  };

  const drawer = (
    <Box sx={{ width: 300 }} role="navigation">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Logo size={30} />
        <IconButton onClick={closeDrawer} aria-label="close menu">
          <ClearIcon />
        </IconButton>
      </Box>
      <Divider />
      <List sx={{ py: 0 }}>
        {dropdownNav.map((item) => (
          <Box key={item.key}>
            <ListItemButton
              onClick={() => toggleMobileSection(item.key)}
              sx={{ py: 1.5, color: '#16213E', fontWeight: 700, justifyContent: 'space-between' }}
            >
              <Typography sx={{ fontWeight: 700 }}>{item.label}</Typography>
              {mobileExpanded === item.key ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
            <Collapse in={mobileExpanded === item.key} timeout="auto" unmountOnExit>
              <Box sx={{ backgroundColor: '#f6f7f9' }}>
                {propertyTypes.map(({ label, Icon }) => (
                  <ListItemButton
                    key={label}
                    component={Link}
                    href="/"
                    onClick={closeDrawer}
                    sx={{ pl: 3, py: 1, gap: 1.5, color: '#16213E' }}
                  >
                    <Icon sx={{ fontSize: 20, color: '#1A4C9E' }} />
                    <Typography sx={{ fontWeight: 600, fontSize: '0.92rem' }}>{label}</Typography>
                  </ListItemButton>
                ))}
                <Typography
                  sx={{
                    pl: 3,
                    pt: 1.5,
                    pb: 0.5,
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.09em',
                    color: '#98a1af',
                  }}
                >
                  BROWSE BY LOCATION
                </Typography>
                {locations.map((loc) => (
                  <ListItemButton
                    key={loc}
                    component={Link}
                    href="/"
                    onClick={closeDrawer}
                    sx={{ pl: 3, py: 0.75, color: '#4a5568' }}
                  >
                    <Typography sx={{ fontWeight: 600, fontSize: '0.9rem' }}>{loc}</Typography>
                  </ListItemButton>
                ))}
              </Box>
            </Collapse>
            <Divider />
          </Box>
        ))}

        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            href="/property-managers"
            onClick={closeDrawer}
            sx={{ py: 1.5, color: '#16213E', fontWeight: 700 }}
          >
            <Typography sx={{ fontWeight: 700 }}>Property Managers</Typography>
          </ListItemButton>
        </ListItem>
        <Divider />
      </List>

      <Box sx={{ p: 2 }}>
        <Button
          fullWidth
          component="a"
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          sx={{ backgroundColor: '#1A4C9E', fontWeight: 700, py: 1.2 }}
        >
          List a property
        </Button>
      </Box>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: '#fff',
        color: '#16213E',
        borderBottom: '1px solid #e7e9ee',
      }}
    >
      <Toolbar
        sx={{
          maxWidth: 1200,
          width: '100%',
          mx: 'auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: 1,
          px: { xs: 2, md: 3 },
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Logo size={36} />
        </Link>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
          {dropdownNav.map((item) => (
            <Box
              key={item.key}
              onMouseEnter={(e) => handleMenuOpen(e, item.key)}
              onMouseLeave={handleMenuClose}
              sx={{ position: 'relative' }}
            >
              <Button
                disableRipple
                endIcon={
                  <KeyboardArrowDownIcon
                    sx={{
                      transition: 'transform 0.2s',
                      transform: openMenu === item.key ? 'rotate(180deg)' : 'none',
                    }}
                  />
                }
                sx={{
                  color: openMenu === item.key ? '#1A4C9E' : '#4a5568',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  px: 1.5,
                  '&:hover': { color: '#1A4C9E', backgroundColor: 'transparent' },
                }}
              >
                {item.label}
              </Button>
              <Popper
                open={openMenu === item.key}
                anchorEl={anchorEl}
                placement="bottom-start"
                disablePortal
                style={{ zIndex: 1300 }}
              >
                <Box sx={{ pt: 1 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      border: '1px solid #e7e9ee',
                      borderRadius: '12px',
                      boxShadow: '0 12px 32px rgba(16,23,41,0.12)',
                      overflow: 'hidden',
                    }}
                  >
                    <MegaMenu onNavigate={handleMenuClose} />
                  </Paper>
                </Box>
              </Popper>
            </Box>
          ))}

          <Button
            component={Link}
            href="/property-managers"
            disableRipple
            sx={{
              color: '#4a5568',
              fontWeight: 600,
              fontSize: '0.95rem',
              px: 1.5,
              '&:hover': { color: '#1A4C9E', backgroundColor: 'transparent' },
            }}
          >
            Property Managers
          </Button>

          <Button
            component="a"
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={{
              ml: 1.5,
              backgroundColor: '#1A4C9E',
              fontWeight: 700,
              px: 2.5,
              boxShadow: 'none',
              '&:hover': { backgroundColor: '#143B7A', boxShadow: 'none' },
            }}
          >
            List a property
          </Button>
        </Box>

        <IconButton
          color="inherit"
          aria-label="open menu"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: 'inline-flex', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={mobileOpen} onClose={closeDrawer}>
        {drawer}
      </Drawer>
    </AppBar>
  );
}
