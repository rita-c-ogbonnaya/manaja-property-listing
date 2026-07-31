export const states = [
  { id: 'lagos', label: 'Lagos' },
  { id: 'abuja', label: 'Abuja FCT' },
  { id: 'kaduna', label: 'Kaduna' },
  { id: 'oyo', label: 'Oyo' },
  { id: 'rivers', label: 'Rivers' },
];

export const properties = [
  {
    id: '1',
    title: 'Luxury Penthouse Victoria Island',
    description: 'Stunning penthouse with premium finishes, smart home technology, and breathtaking city views.',
    price: 950000000,
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
      email: 'chioma@manaja.com',
    },
    amenities: ['Swimming Pool', 'Gym', 'Smart Home', 'Concierge', 'Parking', '24/7 Security'],
    rating: 4.8,
  },
  {
    id: '2',
    title: 'Modern 4-Bed Townhouse Lekki Phase 1',
    description: 'Contemporary townhouse with modern architecture, spacious living areas, and security estate facilities.',
    price: 185000000,
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
      email: 'tunde@manaja.com',
    },
    amenities: ['Garden', 'Parking', 'Security Gate', 'Gym Access', 'Landscaping'],
    rating: 4.6,
  },
  {
    id: '3',
    title: 'Elegant 3-Bed Apartment Ikoyi',
    description: 'High-rise apartment with panoramic views, premium finishes, and exclusive amenities.',
    price: 380000000,
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
      email: 'amara@manaja.com',
    },
    amenities: ['Balcony', 'Air Conditioning', 'Parking', 'Security', 'Power Backup'],
    rating: 4.7,
  },
  {
    id: '4',
    title: 'Spacious 5-Bed Detached House Lekki',
    description: 'Executive detached house with large compound, perfect for families seeking comfort and space.',
    price: 520000000,
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
      email: 'jennifer@manaja.com',
    },
    amenities: ['Swimming Pool', 'Garden', 'Guest House', 'Parking', 'Security Perimeter', 'Tennis Court'],
    rating: 4.9,
  },
  {
    id: '5',
    title: 'Premium 2-Bed Apartment Yaba',
    description: 'Cozy apartment in popular residential area with good access to amenities and transportation.',
    price: 95000000,
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
      email: 'david@manaja.com',
    },
    amenities: ['Parking', 'Security', 'Generator', 'Water Tank', 'Balcony'],
    rating: 4.4,
  },
  {
    id: '6',
    title: 'Luxury Mansion Banana Island',
    description: 'Iconic waterfront mansion with private beach access, infinity pool, and state-of-the-art amenities.',
    price: 1850000000,
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
      email: 'grace@manaja.com',
    },
    amenities: ['Private Beach', 'Infinity Pool', 'Wine Cellar', 'Home Cinema', 'Spa', 'Helicopter Pad', 'Security Team'],
    rating: 5.0,
  },
  {
    id: '7',
    title: 'Modern Studio Apartment VI',
    description: 'Compact and efficient studio perfect for professionals and young couples.',
    price: 45000000,
    location: 'VI, Lagos',
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
      email: 'michael@manaja.com',
    },
    amenities: ['Parking', 'Security', 'Modern Furnishing', 'WiFi Ready'],
    rating: 4.3,
  },
  {
    id: '8',
    title: '3-Bed Semi-Detached House Abuja',
    description: 'Beautiful semi-detached property in premium Abuja residential area with excellent security.',
    price: 145000000,
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
      email: 'blessing@manaja.com',
    },
    amenities: ['Garden', 'Parking', 'Security Gate', 'Spacious Compound', 'Power Supply'],
    rating: 4.5,
  },
  {
    id: '9',
    title: 'Luxury 4-Bed Apartment Abuja',
    description: 'Premium apartment in Abuja with modern amenities and prestigious neighborhood.',
    price: 280000000,
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
      email: 'fatima@manaja.com',
    },
    amenities: ['Swimming Pool', 'Gym', 'Security', 'Parking', 'Air Conditioning', 'Balcony'],
    rating: 4.7,
  },
  {
    id: '10',
    title: 'Cozy 2-Bed Apartment Lagos Island',
    description: 'Well-maintained apartment in vibrant Lagos Island with proximity to business district.',
    price: 125000000,
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
      email: 'olusegun@manaja.com',
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
    .filter((prop) => prop.id !== id && (prop.type === current.type || prop.location.split(',')[0] === current.location.split(',')[0]))
    .slice(0, limit);
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
