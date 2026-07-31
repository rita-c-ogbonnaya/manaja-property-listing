export const states = [
  { id: 'lagos', label: 'Lagos' },
  { id: 'abuja', label: 'Abuja FCT' },
  { id: 'kaduna', label: 'Kaduna' },
  { id: 'oyo', label: 'Oyo' },
  { id: 'rivers', label: 'Rivers' },
];

// Listing intents power the For Sale / For Rent / Shortlet navigation and filters
export const listingTypes = [
  { id: 'sale', label: 'For Sale', tab: 'Buy' },
  { id: 'rent', label: 'For Rent', tab: 'Rent' },
  { id: 'shortlet', label: 'Shortlet', tab: 'Shortlet' },
];

// Categories group the underlying property types shown in the mega-menu
export const categories = [
  { id: 'apartment', label: 'Apartments & Flats', types: ['Apartment', 'Studio', 'Penthouse'] },
  { id: 'house', label: 'Houses & Duplexes', types: ['Townhouse', 'Detached House', 'Semi-Detached'] },
  { id: 'luxury', label: 'Luxury Residences', types: ['Mansion'] },
];

export const propertyManagers = [
  {
    id: 'chioma-okafor',
    name: 'Chioma Okafor',
    company: 'Prime Estates Lagos',
    location: 'Victoria Island, Lagos',
    listings: 48,
    rating: 4.8,
    verified: true,
    phone: '+234 701 234 5678',
    email: 'chioma@manaja.solutions',
    specialties: ['Luxury Homes', 'Penthouses'],
  },
  {
    id: 'tunde-adeyemi',
    name: 'Tunde Adeyemi',
    company: 'Lekki Prime Properties',
    location: 'Lekki Phase 1, Lagos',
    listings: 63,
    rating: 4.6,
    verified: true,
    phone: '+234 702 345 6789',
    email: 'tunde@manaja.solutions',
    specialties: ['Townhouses', 'Estates'],
  },
  {
    id: 'amara-nwachukwu',
    name: 'Amara Nwachukwu',
    company: 'Ikoyi Realty Group',
    location: 'Ikoyi, Lagos',
    listings: 37,
    rating: 4.7,
    verified: true,
    phone: '+234 703 456 7890',
    email: 'amara@manaja.solutions',
    specialties: ['Apartments', 'Shortlets'],
  },
  {
    id: 'blessing-chukwu',
    name: 'Blessing Chukwu',
    company: 'Capital City Homes',
    location: 'Maitama, Abuja',
    listings: 29,
    rating: 4.5,
    verified: true,
    phone: '+234 708 901 2345',
    email: 'blessing@manaja.solutions',
    specialties: ['Semi-Detached', 'Family Homes'],
  },
  {
    id: 'fatima-hassan',
    name: 'Fatima Hassan',
    company: 'Wuse Property Partners',
    location: 'Wuse II, Abuja',
    listings: 41,
    rating: 4.7,
    verified: true,
    phone: '+234 709 012 3456',
    email: 'fatima@manaja.solutions',
    specialties: ['Luxury Apartments', 'Commercial'],
  },
  {
    id: 'grace-adebayo',
    name: 'Grace Adebayo',
    company: 'Banana Island Luxury',
    location: 'Banana Island, Lagos',
    listings: 18,
    rating: 5.0,
    verified: true,
    phone: '+234 706 789 0123',
    email: 'grace@manaja.solutions',
    specialties: ['Mansions', 'Waterfront'],
  },
  {
    id: 'david-okafor',
    name: 'David Okafor',
    company: 'Mainland Homes & Co',
    location: 'Yaba, Lagos',
    listings: 52,
    rating: 4.4,
    verified: false,
    phone: '+234 705 678 9012',
    email: 'david@manaja.solutions',
    specialties: ['Apartments', 'Studios'],
  },
  {
    id: 'olusegun-bankole',
    name: 'Olusegun Bankole',
    company: 'Island Living Realty',
    location: 'Lagos Island, Lagos',
    listings: 34,
    rating: 4.5,
    verified: true,
    phone: '+234 710 123 4567',
    email: 'olusegun@manaja.solutions',
    specialties: ['Apartments', 'Investment'],
  },
];

export const properties = [
  {
    id: '1',
    title: 'Skyline Penthouse, Victoria Island',
    description:
      'A signature top-floor residence finished to an exacting standard, with integrated smart-home controls and uninterrupted views across the Lagos skyline.',
    price: 950000000,
    listingType: 'sale',
    category: 'apartment',
    location: 'Victoria Island, Lagos',
    state: 'lagos',
    type: 'Penthouse',
    beds: 5,
    baths: 4,
    area: 450,
    status: 'available',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9264f475eabf?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a9a6fded0?w=1200&h=800&fit=crop',
    ],
    manager: {
      name: 'Chioma Okafor',
      phone: '+234 701 234 5678',
      email: 'chioma@manaja.solutions',
    },
    amenities: ['Swimming Pool', 'Gym', 'Smart Home', 'Concierge', 'Parking', '24/7 Security'],
    rating: 4.8,
  },
  {
    id: '2',
    title: 'Four-Bedroom Townhouse, Lekki Phase 1',
    description:
      'A contemporary townhouse inside a managed estate, pairing generous open-plan living with the security and shared facilities of a gated community.',
    price: 185000000,
    listingType: 'sale',
    category: 'house',
    location: 'Lekki Phase 1, Lagos',
    state: 'lagos',
    type: 'Townhouse',
    beds: 4,
    baths: 3,
    area: 280,
    status: 'available',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1570129477492-45c003cedd70?w=1200&h=800&fit=crop',
    ],
    manager: {
      name: 'Tunde Adeyemi',
      phone: '+234 702 345 6789',
      email: 'tunde@manaja.solutions',
    },
    amenities: ['Garden', 'Parking', 'Security Gate', 'Gym Access', 'Landscaping'],
    rating: 4.6,
  },
  {
    id: '3',
    title: 'Three-Bedroom Apartment, Ikoyi',
    description:
      'A high-rise apartment with panoramic views and hotel-grade amenities, available on a fully managed annual lease.',
    price: 12000000,
    listingType: 'rent',
    category: 'apartment',
    location: 'Ikoyi, Lagos',
    state: 'lagos',
    type: 'Apartment',
    beds: 3,
    baths: 2,
    area: 220,
    status: 'available',
    images: [
      'https://images.unsplash.com/photo-1600210174918-abf3d876e972?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9264f475eabf?w=1200&h=800&fit=crop',
    ],
    manager: {
      name: 'Amara Nwachukwu',
      phone: '+234 703 456 7890',
      email: 'amara@manaja.solutions',
    },
    amenities: ['Balcony', 'Air Conditioning', 'Parking', 'Security', 'Power Backup'],
    rating: 4.7,
  },
  {
    id: '4',
    title: 'Five-Bedroom Detached Home, Lekki',
    description:
      'An executive detached residence set on a large plot, designed for families who want space, privacy and room to grow.',
    price: 520000000,
    listingType: 'sale',
    category: 'house',
    location: 'Lekki, Lagos',
    state: 'lagos',
    type: 'Detached House',
    beds: 5,
    baths: 4,
    area: 380,
    status: 'available',
    images: [
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9264f475eabf?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a9a6fded0?w=1200&h=800&fit=crop',
    ],
    manager: {
      name: 'Jennifer Nwankwo',
      phone: '+234 704 567 8901',
      email: 'jennifer@manaja.solutions',
    },
    amenities: ['Swimming Pool', 'Garden', 'Guest House', 'Parking', 'Security Perimeter', 'Tennis Court'],
    rating: 4.9,
  },
  {
    id: '5',
    title: 'Two-Bedroom Apartment, Yaba',
    description:
      'A well-connected apartment in the heart of the mainland tech corridor, ideal for professionals who value convenience.',
    price: 3500000,
    listingType: 'rent',
    category: 'apartment',
    location: 'Yaba, Lagos',
    state: 'lagos',
    type: 'Apartment',
    beds: 2,
    baths: 2,
    area: 120,
    status: 'available',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1570129477492-45c003cedd70?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9264f475eabf?w=1200&h=800&fit=crop',
    ],
    manager: {
      name: 'David Okafor',
      phone: '+234 705 678 9012',
      email: 'david@manaja.solutions',
    },
    amenities: ['Parking', 'Security', 'Generator', 'Water Tank', 'Balcony'],
    rating: 4.4,
  },
  {
    id: '6',
    title: 'Waterfront Mansion, Banana Island',
    description:
      'A landmark waterfront estate with private jetty access, an infinity pool and bespoke interiors — one of the most exclusive addresses in Lagos.',
    price: 1850000000,
    listingType: 'sale',
    category: 'luxury',
    location: 'Banana Island, Lagos',
    state: 'lagos',
    type: 'Mansion',
    beds: 7,
    baths: 6,
    area: 650,
    status: 'available',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9264f475eabf?w=1200&h=800&fit=crop',
    ],
    manager: {
      name: 'Grace Adebayo',
      phone: '+234 706 789 0123',
      email: 'grace@manaja.solutions',
    },
    amenities: ['Private Jetty', 'Infinity Pool', 'Wine Cellar', 'Home Cinema', 'Spa', 'Staff Quarters', 'Security Team'],
    rating: 5.0,
  },
  {
    id: '7',
    title: 'Serviced Studio, Victoria Island',
    description:
      'A fully serviced studio available by the night — furnished, connected and ready for short stays, remote work or a weekend in the city.',
    price: 75000,
    listingType: 'shortlet',
    category: 'apartment',
    location: 'Victoria Island, Lagos',
    state: 'lagos',
    type: 'Studio',
    beds: 1,
    baths: 1,
    area: 65,
    status: 'available',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a9a6fded0?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1570129477492-45c003cedd70?w=1200&h=800&fit=crop',
    ],
    manager: {
      name: 'Michael Ejiro',
      phone: '+234 707 890 1234',
      email: 'michael@manaja.solutions',
    },
    amenities: ['Fully Furnished', 'Fast WiFi', 'Parking', 'Security', 'Daily Housekeeping'],
    rating: 4.3,
  },
  {
    id: '8',
    title: 'Three-Bedroom Semi-Detached, Maitama',
    description:
      'A refined semi-detached home in one of Abuja\u2019s most sought-after districts, offered on a managed annual lease with excellent estate security.',
    price: 8500000,
    listingType: 'rent',
    category: 'house',
    location: 'Maitama, Abuja',
    state: 'abuja',
    type: 'Semi-Detached',
    beds: 3,
    baths: 3,
    area: 200,
    status: 'available',
    images: [
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9264f475eabf?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop',
    ],
    manager: {
      name: 'Blessing Chukwu',
      phone: '+234 708 901 2345',
      email: 'blessing@manaja.solutions',
    },
    amenities: ['Garden', 'Parking', 'Security Gate', 'Spacious Compound', 'Power Supply'],
    rating: 4.5,
  },
  {
    id: '9',
    title: 'Serviced Apartment, Wuse II',
    description:
      'A premium serviced apartment in central Abuja, available by the night with concierge support — ideal for business travel and extended stays.',
    price: 120000,
    listingType: 'shortlet',
    category: 'apartment',
    location: 'Wuse II, Abuja',
    state: 'abuja',
    type: 'Apartment',
    beds: 4,
    baths: 3,
    area: 260,
    status: 'available',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a9a6fded0?w=1200&h=800&fit=crop',
    ],
    manager: {
      name: 'Fatima Hassan',
      phone: '+234 709 012 3456',
      email: 'fatima@manaja.solutions',
    },
    amenities: ['Concierge', 'Fully Furnished', 'Gym', 'Parking', 'Air Conditioning', 'Fast WiFi'],
    rating: 4.7,
  },
  {
    id: '10',
    title: 'Two-Bedroom Apartment, Lagos Island',
    description:
      'A well-kept apartment moments from the central business district, offered on a flexible annual lease for city-focused professionals.',
    price: 4200000,
    listingType: 'rent',
    category: 'apartment',
    location: 'Lagos Island, Lagos',
    state: 'lagos',
    type: 'Apartment',
    beds: 2,
    baths: 2,
    area: 110,
    status: 'available',
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003cedd70?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9264f475eabf?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop',
    ],
    manager: {
      name: 'Olusegun Bankole',
      phone: '+234 710 123 4567',
      email: 'olusegun@manaja.solutions',
    },
    amenities: ['Parking', 'Security', 'Balcony', 'Modern Kitchen', 'Power Backup'],
    rating: 4.5,
  },
];

export function getPropertyById(id) {
  return properties.find((prop) => prop.id === id);
}

export function getSimilarProperties(id, limit = 3) {
  const current = getPropertyById(id);
  if (!current) return [];

  return properties
    .filter(
      (prop) =>
        prop.id !== id &&
        prop.listingType === current.listingType &&
        (prop.type === current.type || prop.location.split(',')[0] === current.location.split(',')[0])
    )
    .slice(0, limit);
}

// Full-value price with the correct suffix for the listing intent
export function formatPrice(property) {
  const base = `\u20A6${property.price.toLocaleString('en-NG')}`;
  if (property.listingType === 'rent') return `${base}/yr`;
  if (property.listingType === 'shortlet') return `${base}/night`;
  return base;
}

// Compact price (e.g. ₦1.9B) with suffix, used on dense layouts
export function formatPriceCompact(property) {
  const { price } = property;
  let base;
  if (price >= 1000000000) base = `\u20A6${(price / 1000000000).toFixed(1)}B`;
  else if (price >= 1000000) base = `\u20A6${(price / 1000000).toFixed(0)}M`;
  else base = `\u20A6${price.toLocaleString('en-NG')}`;
  if (property.listingType === 'rent') return `${base}/yr`;
  if (property.listingType === 'shortlet') return `${base}/night`;
  return base;
}

export function listingLabel(listingType) {
  if (listingType === 'rent') return 'For Rent';
  if (listingType === 'shortlet') return 'Shortlet';
  return 'For Sale';
}

export function filterProperties(filters = {}) {
  let result = [...properties];

  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    result = result.filter(
      (prop) =>
        prop.title.toLowerCase().includes(searchLower) ||
        prop.description.toLowerCase().includes(searchLower) ||
        prop.location.toLowerCase().includes(searchLower)
    );
  }

  if (filters.listingType && filters.listingType !== 'all') {
    result = result.filter((prop) => prop.listingType === filters.listingType);
  }

  if (filters.category && filters.category !== 'all') {
    const cat = categories.find((c) => c.id === filters.category);
    if (cat) result = result.filter((prop) => cat.types.includes(prop.type));
  }

  if (filters.state && filters.state !== 'all') {
    result = result.filter((prop) => prop.state === filters.state);
  }

  if (filters.type && filters.type !== 'all') {
    result = result.filter((prop) => prop.type === filters.type);
  }

  if (filters.status && filters.status !== 'all') {
    result = result.filter((prop) => prop.status === filters.status);
  }

  if (filters.minPrice !== undefined) {
    result = result.filter((prop) => prop.price >= filters.minPrice);
  }

  if (filters.maxPrice !== undefined) {
    result = result.filter((prop) => prop.price <= filters.maxPrice);
  }

  if (filters.beds && filters.beds !== 'all') {
    result = result.filter((prop) => prop.beds >= parseInt(filters.beds));
  }

  if (filters.location && filters.location !== 'all') {
    result = result.filter((prop) => prop.location.toLowerCase().includes(filters.location.toLowerCase()));
  }

  return result;
}
