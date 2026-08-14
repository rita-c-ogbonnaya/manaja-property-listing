
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
    throw new Error(errorData.message || errorData.error || `API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

/**
 * Fetch listings from the /listings endpoint
 * Always requests occupancy_status=available for public listings
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
  if (params.offset === undefined || params.offset === null) queryParams.append('offset', 0);
  
  // ALWAYS request occupancy_status=available for public listings
  // unless explicitly overridden (for internal use)
  if (!params.occupancy_status) {
    queryParams.append('occupancy_status', 'available');
  }

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
    
    // Fetch available properties of the same type or location
    const allListings = await getListings({ occupancy_status: 'available', limit: 100 });
    
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
 * Get property managers from backend
 * 
 * BACKEND REQUIREMENT NOTE:
 * This endpoint should return public-safe manager information only.
 * The backend should implement a public endpoint like /metro/managers/public
 * that returns manager information safe for public display.
 * 
 * SECURITY NOTE: Only include information intended to be public. Never expose:
 * - NIN
 * - Identity documents
 * - Verification documents
 * - Private manager information
 * - Authentication credentials
 * - Internal administrative data
 * - Sensitive verification data
 * 
 * Example response structure:
 * [
 *   {
 *     "id": "manager_id",
 *     "name": "Manager Name",
 *     "company": "Company Name",
 *     "location": "City, State",
 *     "phone": "Public Phone",
 *     "email": "Public Email",
 *     "verified": true,
 *     "listings": 10,
 *     "rating": 4.5,
 *     "specialties": ["Apartments", "Commercial"]
 *   }
 * ]
 */
export async function getPropertyManagers() {
  try {
    // Try to fetch from backend public managers endpoint
    return await apiRequest('/metro/managers/public');
  } catch (error) {
    // Return empty array if endpoint doesn't exist or fails
    // The property managers page will show a "coming soon" message
    return [];
  }
}

/**
 * Get a single property manager by ID
 */
export async function getPropertyManagerById(id) {
  const managers = await getPropertyManagers();
  return managers.find(m => m.id === id) || null;
}