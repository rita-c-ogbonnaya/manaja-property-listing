'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Box, Typography, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import SquareFootOutlinedIcon from '@mui/icons-material/SquareFootOutlined';

function formatFullPrice(price) {
  return `₦${price.toLocaleString('en-NG')}`;
}

export default function PropertyCard({ property }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked((prev) => !prev);
  };

  return (
    <Box
      component={Link}
      href={`/properties/${property.id}`}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        backgroundColor: '#fff',
        borderRadius: '14px',
        overflow: 'hidden',
        border: '1px solid #e7e9ee',
        transition: 'all 0.25s ease',
        height: '100%',
        '&:hover': {
          boxShadow: '0 18px 40px rgba(16, 23, 41, 0.14)',
          transform: 'translateY(-4px)',
          borderColor: '#dfe2e9',
          '& .card-image': { transform: 'scale(1.06)' },
        },
      }}
    >
      {/* Image */}
      <Box sx={{ position: 'relative', overflow: 'hidden', height: 220 }}>
        <Box
          component="img"
          src={property.images[0]}
          alt={property.title}
          className="card-image"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.4s ease',
          }}
        />
        <IconButton
          onClick={toggleLike}
          aria-label={liked ? 'Remove from saved' : 'Save property'}
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            width: 38,
            height: 38,
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
            '&:hover': { backgroundColor: '#fff' },
          }}
          size="small"
        >
          {liked ? (
            <FavoriteIcon sx={{ color: '#1A4C9E', fontSize: 20 }} />
          ) : (
            <FavoriteBorderIcon sx={{ color: '#16213E', fontSize: 20 }} />
          )}
        </IconButton>
      </Box>

      {/* Body */}
      <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Typography sx={{ fontSize: '1.35rem', fontWeight: 800, color: '#16213E', lineHeight: 1.1 }}>
          {formatFullPrice(property.price)}
        </Typography>

        <Typography
          sx={{
            color: '#1A4C9E',
            fontWeight: 700,
            fontSize: '0.82rem',
            mt: 0.75,
          }}
        >
          {property.type} for sale
        </Typography>

        <Typography
          sx={{
            color: '#16213E',
            fontWeight: 600,
            fontSize: '1rem',
            mt: 0.5,
            lineHeight: 1.35,
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {property.title}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 1, color: '#6b7280' }}>
          <LocationOnIcon sx={{ fontSize: 16 }} />
          <Typography sx={{ fontSize: '0.85rem' }} noWrap>
            {property.location}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2.5,
            mt: 'auto',
            pt: 1.75,
            borderTop: '1px solid #eef0f3',
            color: '#4a5568',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
            <KingBedOutlinedIcon sx={{ fontSize: 18, color: '#98a1af' }} />
            <Typography sx={{ fontSize: '0.85rem', fontWeight: 600 }}>{property.beds} Beds</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
            <BathtubOutlinedIcon sx={{ fontSize: 18, color: '#98a1af' }} />
            <Typography sx={{ fontSize: '0.85rem', fontWeight: 600 }}>{property.baths} Baths</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
            <SquareFootOutlinedIcon sx={{ fontSize: 18, color: '#98a1af' }} />
            <Typography sx={{ fontSize: '0.85rem', fontWeight: 600 }}>{property.area}m²</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
