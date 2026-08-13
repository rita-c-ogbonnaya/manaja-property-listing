
// Always use proxy for production to avoid CORS issues
// The proxy forwards requests to the backend server-side
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://manaja-backend.onrender.com';
const USE_PROXY = true; // Always use proxy to avoid CORS issues

/**
 * Get the authentication token from localStorage or cookies
 */
function getAuthToken() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('authToken') || null;
  }
  return null;
}

/**
 * Helper function for making API requests
 */
async function apiRequest(endpoint, options = {}) {
  const token = getAuthToken();
  
  const defaultHeaders = {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
  };

  // When using proxy, the endpoint path is appended to /api/proxy
  // For example: /listings becomes /api/proxy/listings
  const url = USE_PROXY 
    ? `/api/proxy${endpoint}` 
    : `${API_BASE_URL}${endpoint}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

/**
 * Fetch listings from the /listings endpoint
 */
export async function getListings(params = {}) {
  const queryParams = new URLSearchParams();
  
  // Map frontend filter names to API parameter names
  const paramMap = {
    search: 'search',
    type: 'property_type',
    state: 'state',
    beds: 'bedrooms',
    listingType: 'property_status',
    status: 'occupancy_status',
    limit: 'limit',
    offset: 'offset',
    occupancy_status: 'occupancy_status',
  };

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '' && value !== 'all') {
      const apiKey = paramMap[key] || key;
      queryParams.append(apiKey, value);
    }
  });

  // Set defaults according to API spec
  if (!params.limit) queryParams.append('limit', 10);
  if (!params.offset) queryParams.append('offset', 0);

  const url = `/listings?${queryParams.toString()}`;
  return apiRequest(url);
}

/**
 * Fetch a single property by ID using the /listings endpoint
 */
export async function getPropertyById(id) {
  // Since there's no GET /listings/{id} endpoint in the spec,
  // we fetch all listings and filter, or use the search parameter
  try {
    // Try to fetch the specific property by searching for it
    const listings = await getListings({ search: id, limit: 1 });
    
    // If we get results, check if any match the exact ID
    if (listings && listings.length > 0) {
      const property = listings.find(p => p.id === id);
      if (property) return property;
    }
    
    // Fallback: fetch more listings and filter
    const allListings = await getListings({ limit: 100 });
    return allListings.find(p => p.id === id);
  } catch (error) {
    console.error('Error fetching property:', error);
    return null;
  }
}

/**
 * Fetch similar properties
 */
export async function getSimilarProperties(propertyId, limit = 3) {
  try {
    const property = await getPropertyById(propertyId);
    if (!property) return [];
    
    // Fetch properties of the same type or location
    const allListings = await getListings({ limit: 100 });
    
    return allListings
      .filter(p => 
        p.id !== propertyId && 
        (p.property_type === property.property_type || 
         p.address?.split(',')[0] === property.address?.split(',')[0])
      )
      .slice(0, limit);
  } catch (error) {
    console.error('Error fetching similar properties:', error);
    return [];
  }
}

/**
 * Submit contact form
 */
export async function submitContactForm(data) {
  return apiRequest('/contacts', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * Get property stats for dashboard
 */
export async function getPropertyStats() {
  return apiRequest('/metro/properties/stats');
}

/**
 * Get property managers (currently using mock data)
 * This can be connected to a backend endpoint when available
 */
export async function getPropertyManagers() {
  // For now, import and return mock data
  // In the future, this could call: return apiRequest('/metro/managers/public');
  const { propertyManagers } = await import('@/lib/mock-data');
  return propertyManagers;
}

/**
 * Get a single property manager by ID
 */
export async function getPropertyManagerById(id) {
  const managers = await getPropertyManagers();
  return managers.find(m => m.id === id) || null;
}