'use client';

import { Box, Skeleton } from '@mui/material';

export default function PropertyCardSkeleton() {
  return (
    <Box
      sx={{
        borderRadius: '16px',
        overflow: 'hidden',
        backgroundColor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Skeleton
        variant="rectangular"
        sx={{ width: '100%', height: 200 }}
        animation="wave"
      />
      <Box sx={{ p: 2.5 }}>
        <Skeleton
          variant="text"
          sx={{ width: '70%', height: 24, mb: 1 }}
          animation="wave"
        />
        <Skeleton
          variant="text"
          sx={{ width: '50%', height: 20, mb: 2 }}
          animation="wave"
        />
        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <Skeleton
            variant="rectangular"
            sx={{ width: 60, height: 28, borderRadius: '8px' }}
            animation="wave"
          />
          <Skeleton
            variant="rectangular"
            sx={{ width: 60, height: 28, borderRadius: '8px' }}
            animation="wave"
          />
        </Box>
        <Skeleton
          variant="text"
          sx={{ width: '40%', height: 32 }}
          animation="wave"
        />
      </Box>
    </Box>
  );
}
