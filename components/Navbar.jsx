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
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Logo from '@/components/Logo';
import { useLocationState } from '@/components/StateProvider';
import { useTheme } from '@/components/ThemeProvider';

const APP_URL = 'https://app.manaja.solutions';

const propertyTypes = [
  { label: 'Houses', Icon: HomeOutlinedIcon },
  { label: 'Flats / Apartments', Icon: ApartmentOutlinedIcon },
  { label: 'Lands', Icon: TerrainOutlinedIcon },
  { label: 'Commercial Property', Icon: BusinessOutlinedIcon },
];

const locations = [
  { name: 'Lagos', stateId: 'lagos' },
  { name: 'Abuja', stateId: 'abuja' },
  { name: 'Kaduna', stateId: 'kaduna' },
  { name: 'Oyo', stateId: 'oyo' },
  { name: 'Rivers', stateId: 'rivers' },
];

const dropdownNav = [
  { label: 'For Sale', key: 'sale', listingType: 'sale' },
  { label: 'For Rent', key: 'rent', listingType: 'rent' },
  { label: 'Shortlets', key: 'shortlet', listingType: 'shortlet' },
];

function MegaMenu({ onNavigate, onFilterByListingType }) {
  const { setListingType, setPropertyType, setLocationFilter, setLocationStateId } = useLocationState();

  const handlePropertyTypeClick = (type) => {
    if (onFilterByListingType) {
      setListingType(onFilterByListingType);
    }
    setPropertyType(type);
    setLocationFilter('all');
    setLocationStateId('all');
    onNavigate();
  };

  const handleLocationClick = (locationObj) => {
    if (onFilterByListingType) {
      setListingType(onFilterByListingType);
    }
    setPropertyType('all');
    setLocationFilter(locationObj.name);
    setLocationStateId(locationObj.stateId);
    onNavigate();
  };

  const handleViewAll = () => {
    if (onFilterByListingType) {
      setListingType(onFilterByListingType);
    }
    setPropertyType('all');
    setLocationFilter('all');
    setLocationStateId('all');
    onNavigate();
  };

  const { mode } = useTheme();

  return (
    <Box sx={{ width: 320, py: 1 }}>
      {propertyTypes.map(({ label, Icon }) => (
        <ListItemButton
          key={label}
          component={Link}
          href="/"
          onClick={() => handlePropertyTypeClick(label)}
          sx={{ px: 2.5, py: 1.1, gap: 1.5, color: mode === 'dark' ? '#E6EDF3' : '#16213E' }}
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
          color: mode === 'dark' ? '#8B949E' : '#98a1af',
        }}
      >
        BROWSE BY LOCATION
      </Typography>
      {locations.map((loc) => (
        <ListItemButton
          key={loc.name}
          component={Link}
          href="/"
          onClick={() => handleLocationClick(loc)}
          sx={{ px: 2.5, py: 0.9, color: mode === 'dark' ? '#8B949E' : '#4a5568' }}
        >
          <Typography sx={{ fontWeight: 600, fontSize: '0.92rem' }}>{loc.name}</Typography>
        </ListItemButton>
      ))}

      <Divider sx={{ my: 1 }} />
      <ListItemButton
        component={Link}
        href="/"
        onClick={handleViewAll}
        sx={{ px: 2.5, py: 1, gap: 1, color: mode === 'dark' ? '#E6EDF3' : '#1A4C9E' }}
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
  const { setListingType, setPropertyType, setLocationFilter } = useLocationState();
  const { mode, toggleTheme } = useTheme();

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

  const handleMobilePropertyTypeClick = (itemKey, type) => {
    const listingTypeMap = {
      'sale': 'sale',
      'rent': 'rent',
      'shortlet': 'shortlet'
    };
    setListingType(listingTypeMap[itemKey]);
    setPropertyType(type);
    setLocationFilter('all');
    setLocationStateId('all');
    closeDrawer();
  };

  const handleMobileLocationClick = (itemKey, locationObj) => {
    const listingTypeMap = {
      'sale': 'sale',
      'rent': 'rent',
      'shortlet': 'shortlet'
    };
    setListingType(listingTypeMap[itemKey]);
    setPropertyType('all');
    setLocationFilter(locationObj.name);
    setLocationStateId(locationObj.stateId);
    closeDrawer();
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
              sx={{ py: 1.5, color: mode === 'dark' ? '#E6EDF3' : '#16213E', fontWeight: 700, justifyContent: 'space-between' }}
            >
              <Typography sx={{ fontWeight: 700 }}>{item.label}</Typography>
              {mobileExpanded === item.key ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
            <Collapse in={mobileExpanded === item.key} timeout="auto" unmountOnExit>
              <Box sx={{ backgroundColor: mode === 'dark' ? '#161B22' : '#f6f7f9' }}>
                {propertyTypes.map(({ label, Icon }) => (
                  <ListItemButton
                    key={label}
                    component={Link}
                    href="/"
                    onClick={() => handleMobilePropertyTypeClick(item.key, label)}
                    sx={{ pl: 3, py: 1, gap: 1.5, color: mode === 'dark' ? '#E6EDF3' : '#16213E' }}
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
                    color: mode === 'dark' ? '#8B949E' : '#98a1af',
                  }}
                >
                  BROWSE BY LOCATION
                </Typography>
                {locations.map((loc) => (
                  <ListItemButton
                    key={loc.name}
                    component={Link}
                    href="/"
                    onClick={() => handleMobileLocationClick(item.key, loc)}
                    sx={{ pl: 3, py: 0.75, color: mode === 'dark' ? '#8B949E' : '#4a5568' }}
                  >
                    <Typography sx={{ fontWeight: 600, fontSize: '0.9rem' }}>{loc.name}</Typography>
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
            sx={{ py: 1.5, color: mode === 'dark' ? '#E6EDF3' : '#0A1628', fontWeight: 700 }}
          >
            <Typography sx={{ fontWeight: 700 }}>Trusted Partners</Typography>
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
          sx={{ 
            backgroundColor: '#1A4C9E', 
            fontWeight: 700, 
            py: 1.3,
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(26, 76, 158, 0.3)',
            '&:hover': {
              backgroundColor: '#143B7A',
              boxShadow: '0 6px 16px rgba(26, 76, 158, 0.4)',
            }
          }}
        >
          List Your Property
        </Button>
      </Box>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: mode === 'dark' ? 'rgba(22, 27, 34, 0.98)' : 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(20px)',
        color: mode === 'dark' ? '#E6EDF3' : '#0A1628',
        borderBottom: mode === 'dark' ? '1px solid #30363D' : '1px solid #E8EBF0',
        boxShadow: mode === 'dark' ? '0 2px 16px rgba(0, 0, 0, 0.4)' : '0 2px 16px rgba(10, 22, 40, 0.04)',
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
                  color: openMenu === item.key ? '#1A4C9E' : (mode === 'dark' ? '#8B949E' : '#4a5568'),
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
                      border: '1px solid #E8EBF0',
                      borderRadius: '16px',
                      boxShadow: mode === 'dark' ? '0 16px 48px rgba(0, 0, 0, 0.4)' : '0 16px 48px rgba(10, 22, 40, 0.12)',
                      overflow: 'hidden',
                      backgroundColor: mode === 'dark' ? 'rgba(22, 27, 34, 0.98)' : 'rgba(255, 255, 255, 0.98)',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    <MegaMenu onNavigate={handleMenuClose} onFilterByListingType={item.listingType} />
                  </Paper>
                </Box>
              </Popper>
            </Box>
          ))}

          {/* <Button
            component={Link}
            href="/property-managers"
            disableRipple
            sx={{
              color: mode === 'dark' ? '#E6EDF3' : '#0A1628',
              fontWeight: 600,
              fontSize: '0.95rem',
              px: 1.5,
              '&:hover': { color: '#1A4C9E', backgroundColor: 'transparent' },
            }}
          >
            Trusted Partners
          </Button> */}

          <IconButton
            onClick={toggleTheme}
            sx={{
              ml: 1,
              color: mode === 'dark' ? '#E6EDF3' : '#0A1628',
              '&:hover': { backgroundColor: mode === 'dark' ? 'rgba(230, 237, 243, 0.1)' : 'rgba(26, 76, 158, 0.1)' },
            }}
            aria-label="toggle theme"
          >
            {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

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
              py: 1,
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(26, 76, 158, 0.3)',
              '&:hover': { 
                backgroundColor: '#143B7A',
                boxShadow: '0 6px 16px rgba(26, 76, 158, 0.4)',
                transform: 'translateY(-1px)',
              },
              transition: 'all 0.2s ease',
            }}
          >
            List Your Property
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
