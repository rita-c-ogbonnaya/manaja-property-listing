'use client';

import { Box, Typography } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

export default function Logo({ variant = 'dark', size = 36 }) {
  const wordColor = variant === 'light' ? '#fff' : '#16213E';
  const iconBox = Math.round(size * 0.95);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Box
        sx={{
          width: iconBox,
          height: iconBox,
          borderRadius: `${Math.round(iconBox * 0.28)}px`,
          backgroundColor: '#E23744',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <HomeRoundedIcon sx={{ color: '#fff', fontSize: iconBox * 0.62 }} />
      </Box>
      <Typography
        component="span"
        sx={{
          fontWeight: 800,
          fontSize: size * 0.62,
          letterSpacing: '-0.02em',
          color: wordColor,
          lineHeight: 1,
        }}
      >
        manaja
      </Typography>
    </Box>
  );
}
