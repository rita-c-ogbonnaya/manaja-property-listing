'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import PropertyCard from '@/components/PropertyCard';
import { getPropertyById, getSimilarProperties } from '@/lib/mock-data';

export default function PropertyDetailPage() {
  const params = useParams();
  const property = getPropertyById(params.id);
  const similarProperties = getSimilarProperties(params.id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  if (!property) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Property not found
        </Typography>
        <Button component={Link} href="/" variant="contained">
          Back to Properties
        </Button>
      </Container>
    );
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleContactChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitContact = () => {
    console.log('[v0] Contact form submitted:', contactForm);
    setContactDialogOpen(false);
    setContactForm({ name: '', email: '', phone: '', message: '' });
    alert('Thank you for your interest! The manager will contact you soon.');
  };

  const formatPrice = (price) => {
    if (price >= 1000000000) {
      return `₦${(price / 1000000000).toFixed(1)}B`;
    }
    return `₦${(price / 1000000).toFixed(0)}M`;
  };

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        {/* Back Button */}
        <Button
          component={Link}
          href="/"
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 3 }}
        >
          Back to Properties
        </Button>

        <Grid container spacing={4}>
          {/* Image Gallery */}
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                height: 500,
                borderRadius: 2,
                mb: 3,
              }}
            >
              <img
                src={property.images[currentImageIndex]}
                alt={property.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />

              {/* Navigation */}
              {property.images.length > 1 && (
                <>
                  <Button
                    onClick={handlePrevImage}
                    sx={{
                      position: 'absolute',
                      left: 16,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      minWidth: 40,
                      '&:hover': { backgroundColor: '#fff' },
                    }}
                  >
                    {'<'}
                  </Button>
                  <Button
                    onClick={handleNextImage}
                    sx={{
                      position: 'absolute',
                      right: 16,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      minWidth: 40,
                      '&:hover': { backgroundColor: '#fff' },
                    }}
                  >
                    {'>'}
                  </Button>

                  {/* Image Indicators */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 16,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      gap: 1,
                    }}
                  >
                    {property.images.map((_, idx) => (
                      <Box
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          backgroundColor:
                            idx === currentImageIndex
                              ? '#E23744'
                              : 'rgba(255, 255, 255, 0.6)',
                          cursor: 'pointer',
                          transition: 'all 0.3s',
                        }}
                      />
                    ))}
                  </Box>
                </>
              )}
            </Box>

            {/* Thumbnail Gallery */}
            <Grid container spacing={1}>
              {property.images.map((img, idx) => (
                <Grid item xs={3} key={idx}>
                  <Box
                    onClick={() => setCurrentImageIndex(idx)}
                    sx={{
                      width: '100%',
                      height: 100,
                      borderRadius: 1,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      border:
                        idx === currentImageIndex
                          ? '3px solid #E23744'
                          : '2px solid #e0e0e0',
                      transition: 'all 0.3s',
                    }}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Details Sidebar */}
          <Grid item xs={12} md={4}>
            {/* Header */}
            <Box sx={{ mb: 3 }}>
              <Chip
                label={property.type}
                sx={{
                  backgroundColor: '#16213E',
                  color: '#fff',
                  fontWeight: 700,
                  mb: 2,
                }}
              />
              <Typography variant="h4" sx={{ mb: 1, fontWeight: 700 }}>
                {property.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#666', mb: 2, textTransform: 'uppercase' }}
              >
                {property.location}
              </Typography>
              <Typography variant="h5" sx={{ color: '#16213E', fontWeight: 800 }}>
                {formatPrice(property.price)}
              </Typography>
            </Box>

            {/* Key Stats */}
            <Box
              sx={{
                backgroundColor: '#fff',
                p: 3,
                borderRadius: 2,
                mb: 3,
                border: '1px solid #e0e0e0',
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#E23744' }}>
                      {property.beds}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666', mt: 0.5 }}>
                      Bedrooms
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#E23744' }}>
                      {property.baths}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666', mt: 0.5 }}>
                      Bathrooms
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ textAlign: 'center', borderTop: '1px solid #e0e0e0', pt: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#E23744' }}>
                      {property.area}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666', mt: 0.5 }}>
                      Square Meters
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            {/* Manager Card */}
            <Box
              sx={{
                backgroundColor: '#fff',
                p: 3,
                borderRadius: 2,
                mb: 3,
                border: '1px solid #e0e0e0',
              }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>
                Property Manager
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                {property.manager.name}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <LocalPhoneIcon sx={{ fontSize: 18, color: '#E23744' }} />
                <Typography variant="body2">{property.manager.phone}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <MailIcon sx={{ fontSize: 18, color: '#E23744' }} />
                <Typography variant="body2">{property.manager.email}</Typography>
              </Box>
              <Button
                fullWidth
                variant="contained"
                onClick={() => setContactDialogOpen(true)}
                sx={{
                  backgroundColor: '#E23744',
                  color: '#1a1a1a',
                  '&:hover': { backgroundColor: '#C42B37' },
                }}
              >
                Contact Manager
              </Button>
            </Box>

            {/* Rating */}
            <Box
              sx={{
                backgroundColor: '#fff',
                p: 3,
                borderRadius: 2,
                textAlign: 'center',
                border: '1px solid #e0e0e0',
              }}
            >
              <Typography variant="body2" sx={{ color: '#666', mb: 1 }}>
                Property Rating
              </Typography>
              <Typography variant="h5" sx={{ color: '#E23744', fontWeight: 700 }}>
                {property.rating}/5
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Description */}
        <Box sx={{ backgroundColor: '#fff', p: 4, borderRadius: 2, my: 4, border: '1px solid #e0e0e0' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            About This Property
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, mb: 3 }}>
            {property.description}
          </Typography>

          {/* Amenities */}
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Amenities
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {property.amenities.map((amenity, idx) => (
              <Chip
                key={idx}
                label={amenity}
                sx={{
                  backgroundColor: '#f5f5f5',
                  border: '1px solid #e0e0e0',
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Similar Properties */}
        {similarProperties.length > 0 && (
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
              Similar Properties
            </Typography>
            <Grid container spacing={3}>
              {similarProperties.map((prop) => (
                <Grid item xs={12} sm={6} lg={4} key={prop.id}>
                  <PropertyCard property={prop} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>

      {/* Contact Dialog */}
      <Dialog open={contactDialogOpen} onClose={() => setContactDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Contact {property.manager.name}</DialogTitle>
        <DialogContent sx={{ pt: 2 }}>
          <TextField
            fullWidth
            label="Your Name"
            name="name"
            value={contactForm.name}
            onChange={handleContactChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            value={contactForm.email}
            onChange={handleContactChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            value={contactForm.phone}
            onChange={handleContactChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            value={contactForm.message}
            onChange={handleContactChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setContactDialogOpen(false)}>Cancel</Button>
          <Button
            onClick={handleSubmitContact}
            variant="contained"
            sx={{ backgroundColor: '#E23744' }}
          >
            Send Message
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
