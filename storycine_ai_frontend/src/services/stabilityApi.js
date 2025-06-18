//
// Stability AI API Service for React Frontend
//
// Note: This file provides safe, authenticated HTTP access to Stability AI API endpoints for StoryCine AI frontend components.
// -------
// SECURITY: DO NOT hardcode your API key here! Instead, set it as a runtime environment variable (see usage notes below).
//

const BASE_URL = 'https://api.stability.ai/v1'; // Stability API base URL

// PUBLIC_INTERFACE
/**
 * Gets the Stability AI API key from the environment.
 * @returns {string|null}
 */
function getStabilityApiKey() {
  // React doesn't read `.env` at build-time -- use REACT_APP_... prefix for env vars:
  // E.g., in your .env file: REACT_APP_STABILITY_API_KEY=sk-xxxx
  return process.env.REACT_APP_STABILITY_API_KEY || null;
}

// PUBLIC_INTERFACE
/**
 * Wrapper for making authenticated Stability AI API requests.
 * @param {string} endpoint - Relative API endpoint, e.g., '/generation/text-to-image'
 * @param {Object} options - Fetch options (method, headers, body, etc.)
 * @returns {Promise<any>} - Promise resolving to parsed JSON/data or rejecting with error
 */
async function stabilityApiRequest(endpoint, options = {}) {
  const apiKey = getStabilityApiKey();
  if (!apiKey) {
    throw new Error(
      'Stability API key not found. Please set REACT_APP_STABILITY_API_KEY in your environment.'
    );
  }

  const url = `${BASE_URL}${endpoint}`;
  const headers = {
    'Authorization': `Bearer ${apiKey}`,
    // Most endpoints accept JSON; customize Content-Type as needed by endpoint!
    'Content-Type': 'application/json',
    ...(options.headers || {})
  };

  const fetchOptions = {
    ...options,
    headers,
  };

  try {
    const res = await fetch(url, fetchOptions);
    if (!res.ok) {
      // Attach more detailed API error if provided
      let errMsg = `Stability API Error: ${res.status} ${res.statusText}`;
      try {
        const errBody = await res.json();
        errMsg += (errBody && errBody.message) ? `, ${errBody.message}` : '';
      } catch (_) { /* Ignore JSON parse errors for error body */ }
      throw new Error(errMsg);
    }
    // If expecting binary, customize response handling!
    return await res.json();
  } catch (error) {
    throw new Error(`Failed Stability API request: ${error.message}`);
  }
}

// PUBLIC_INTERFACE
/**
 * Example: Generate an image from a prompt (basic).
 * This is illustrative - adjust endpoint and params to match Stability API docs!
 * @param {string} prompt
 * @returns {Promise<object>} API response
 */
export async function generateImageFromPrompt(prompt) {
  // Example endpoint and body format for text-to-image. Please consult the Stability API documentation for actual usage.
  // https://platform.stability.ai/docs/api-reference#tag/v1generation/operation/textToImage
  return stabilityApiRequest(
    '/generation/text-to-image',
    {
      method: 'POST',
      body: JSON.stringify({ prompt })
    }
  );
}

// Export core utility for custom usage.
export {
  stabilityApiRequest, // for direct, advanced custom calls
  getStabilityApiKey,
};
