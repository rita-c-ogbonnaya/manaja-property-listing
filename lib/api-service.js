
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.manaja.solutions';

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

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
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
    type: 'type',
    state: 'state',
    beds: 'beds',
    listingType: 'listing_type',
    status: 'status',
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

  // Set defaults
  if (!params.limit) queryParams.append('limit', 20);
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
        (p.type === property.type || 
         p.location?.split(',')[0] === property.location?.split(',')[0])
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