// lib/api-service.js

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://your-api-base-url.com';

/**
 * Fetches a list of listings from the API.
 * @param {Object} params - Query parameters for filtering.
 * @param {string} [params.occupancy_status] - Filter by occupancy status (available, occupied).
 * @param {number} [params.limit=10] - The number of listings to return.
 * @param {number} [params.offset=10] - The number of listings to skip.
 * @param {string} [params.search] - Search term for property name.
 * @param {string} [params.type] - Filter by property type.
 * @param {string} [params.state] - Filter by state.
 * @param {string} [params.listing_type] - Filter by listing type (sale, rent, shortlet).
 * @param {string} [params.beds] - Filter by number of bedrooms.
 * @returns {Promise<Array>} A promise that resolves to an array of listings.
 */
export async function getListings(params = {}) {
    const queryParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
            // Map frontend filter names to API parameter names if needed
            let apiKey = key;
            if (key === 'listingType') apiKey = 'listing_type';
            if (key === 'search') apiKey = 'search';
            if (key === 'type') apiKey = 'type';
            if (key === 'state') apiKey = 'state';
            if (key === 'beds') apiKey = 'beds';
            if (key === 'limit') apiKey = 'limit';
            if (key === 'offset') apiKey = 'offset';

            queryParams.append(apiKey, value);
        }
    });

    // Default limit and offset if not provided
    if (!params.limit) queryParams.append('limit', 20);
    if (!params.offset) queryParams.append('offset', 0);

    // Add any other default parameters here, e.g., occupancy_status
    // if (!params.occupancy_status) queryParams.append('occupancy_status', 'available');

    const url = `${API_BASE_URL}/listings?${queryParams.toString()}`;
    console.log('Fetching listings from:', url);

    // TODO: Add your authentication logic here, e.g., get the token from a context or cookie
    const token = localStorage.getItem('authToken'); // Example: retrieve token from localStorage

    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            ...(token && { 'Authorization': `Bearer ${token}` }), // Add Bearer token if available
        },
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Error fetching listings: ${response.status} ${response.statusText}`);
    }

    return response.json(); // The API returns an array of listings based on the spec
}

/**
 * Fetches a single property by its ID.
 * @param {string} id - The ID of the property.
 * @returns {Promise<Object>} A promise that resolves to a single property object.
 */
export async function getPropertyById(id) {
    // The OpenAPI spec doesn't have a GET /listings/{id} endpoint, but we can use the general properties endpoint if available.
    // Since we don't have a direct endpoint, we can fetch the full list and find the property by ID.
    // For better performance, this should ideally be a dedicated endpoint.
    // I'll use the /listings endpoint with a filter (if supported) or manually filter.
    // For now, we'll fetch all listings and find the one with the matching ID.
    // WARNING: This is not efficient for large datasets. A dedicated GET /properties/{id} endpoint is recommended.
    console.warn('getPropertyById is not efficient. Please implement a dedicated endpoint for fetching a single property.');
    const allListings = await getListings({ limit: 1000 }); // Fetch a large number, adjust as needed
    return allListings.find(property => property.id === id);
}

// You can add other API functions here, e.g., getSimilarProperties, createProperty, updateProperty, etc.