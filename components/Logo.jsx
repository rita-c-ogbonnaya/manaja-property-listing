'use client';

import { Box } from '@mui/material';

export default function Logo({ variant = 'dark', size = 36 }) {
  // The brand logo is dark blue lettering, so on dark surfaces we place it
  // on a light rounded chip to keep both the blue wordmark and yellow arc legible.
  const isLight = variant === 'light';

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: isLight ? 1.25 : 0,
        py: isLight ? 0.75 : 0,
        borderRadius: isLight ? '10px' : 0,
        backgroundColor: isLight ? '#fff' : 'transparent',
      }}
    >
      <Box
        component="img"
        src="/logo.png"
        alt="Manaja"
        sx={{
          height: size,
          width: 'auto',
          display: 'block',
        }}
      />
    </Box>
  );
}
