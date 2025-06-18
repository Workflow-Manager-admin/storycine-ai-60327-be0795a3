//
// TMDB API Service for React Frontend
//
// Provides safe, authenticated HTTP access to The Movie Database (TMDB) API endpoints for StoryCine AI frontend components.
// -------
// IMPORTANT: DO NOT hardcode your API key here! Always use environment variables for secure usage.
// Usage: Set REACT_APP_TMDB_API_KEY in your .env file (see README).
//

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

// PUBLIC_INTERFACE
/**
 * Gets the TMDB API key from the environment variables.
 * @returns {string|null}
 */
function getTmdbApiKey() {
  // React apps must use env vars prefixed with REACT_APP_
  // Usage: add REACT_APP_TMDB_API_KEY to your .env file.
  return process.env.REACT_APP_TMDB_API_KEY || null;
}

// PUBLIC_INTERFACE
/**
 * Wrapper for making authenticated TMDB API requests.
 * @param {string} endpoint - Relative TMDB endpoint (e.g., '/search/movie')
 * @param {Object} options - Fetch options.
 * @param {Object} params - Query parameters as an object
 * @returns {Promise<any>} - Resolves to response JSON
 */
async function tmdbApiRequest(endpoint, options = {}, params = {}) {
  const apiKey = getTmdbApiKey();
  if (!apiKey) {
    throw new Error(
      'TMDB API key not found. Please set REACT_APP_TMDB_API_KEY in your environment.'
    );
  }

  // Always include API key as a query parameter (required by TMDB)
  const url = new URL(`${TMDB_BASE_URL}${endpoint}`);
  url.searchParams.append('api_key', apiKey);

  // Append any additional query params
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.append(key, value);
  }

  try {
    const res = await fetch(url.toString(), options);
    if (!res.ok) {
      let errMsg = `TMDB API Error: ${res.status} ${res.statusText}`;
      try {
        const errBody = await res.json();
        errMsg += (errBody && errBody.status_message) ? `, ${errBody.status_message}` : '';
      } catch (_) {/* Ignore JSON parse errors for error body */}
      throw new Error(errMsg);
    }
    return await res.json();
  } catch (error) {
    throw new Error(`Failed TMDB API request: ${error.message}`);
  }
}

// PUBLIC_INTERFACE
/**
 * Search for movies by title using TMDB API.
 * @param {string} query - Movie title or keywords to search for.
 * @param {number} [page=1] - Page of results (optional).
 * @returns {Promise<object>} - TMDB API movie search response.
 */
export async function searchMovies(query, page = 1) {
  if (!query) throw new Error("Query is required for searching movies.");
  return tmdbApiRequest(
    '/search/movie',
    {},
    {
      query,
      page,
      include_adult: 'false',
      language: 'en-US'
    }
  );
}

// You can easily add more TMDB endpoints as needed, e.g. getMovieDetails(id), etc.

// Export core utility for advanced usage.
export {
  tmdbApiRequest,
  getTmdbApiKey,
};
