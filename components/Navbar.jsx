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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import Logo from '@/components/Logo';

const navLinks = [
  { label: 'For Sale', href: '/' },
  { label: 'For Rent', href: '/' },
  { label: 'Shortlets', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 280 }} role="navigation">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Logo size={30} />
        <IconButton onClick={handleDrawerToggle} aria-label="close menu">
          <ClearIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {navLinks.map((link, idx) => (
          <ListItem key={`${link.label}-${idx}`} disablePadding>
            <ListItemButton
              component={Link}
              href={link.href}
              onClick={handleDrawerToggle}
              sx={{ py: 1.5, color: '#16213E', fontWeight: 600 }}
            >
              {link.label}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2 }}>
        <Button
          fullWidth
          component={Link}
          href="#list"
          onClick={handleDrawerToggle}
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

        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
          {navLinks.map((link, idx) => (
            <Button
              key={`${link.label}-${idx}`}
              component={Link}
              href={link.href}
              disableRipple
              sx={{
                color: '#4a5568',
                fontWeight: 600,
                fontSize: '0.95rem',
                px: 1.5,
                '&:hover': { color: '#1A4C9E', backgroundColor: 'transparent' },
              }}
            >
              {link.label}
            </Button>
          ))}
          <Button
            component={Link}
            href="#list"
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

      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </AppBar>
  );
}
