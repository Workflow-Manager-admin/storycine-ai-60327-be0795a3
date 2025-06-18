//
// ElevenLabs API Service for React Frontend
//
// Note: This service provides authenticated access to ElevenLabs API endpoints for StoryCine AI frontend components.
// IMPORTANT: DO NOT hardcode your API key here! Always use environment variables for secure usage.
//

const ELEVENLABS_BASE_URL = 'https://api.elevenlabs.io/v1';

// PUBLIC_INTERFACE
/**
 * Gets the ElevenLabs API key from the environment.
 * @returns {string|null}
 */
function getElevenLabsApiKey() {
  // React apps must use env vars prefixed with REACT_APP_
  // Usage: add REACT_APP_ELEVENLABS_API_KEY to your .env file.
  return process.env.REACT_APP_ELEVENLABS_API_KEY || null;
}

// PUBLIC_INTERFACE
/**
 * Wrapper for making authenticated ElevenLabs API requests.
 * @param {string} endpoint - Relative endpoint, e.g., '/text-to-speech'
 * @param {Object} options - Fetch options (method, headers, body, etc.)
 * @returns {Promise<any>} - Resolves to response data or rejects with error
 */
async function elevenLabsApiRequest(endpoint, options = {}) {
  const apiKey = getElevenLabsApiKey();
  if (!apiKey) {
    throw new Error(
      'ElevenLabs API key not found. Please set REACT_APP_ELEVENLABS_API_KEY in your environment.'
    );
  }

  const url = `${ELEVENLABS_BASE_URL}${endpoint}`;
  const headers = {
    'xi-api-key': apiKey,
    // ElevenLabs expects JSON for most endpoints; customize if requesting audio blobs/etc
    'Content-Type': 'application/json',
    ...(options.headers || {})
  };

  const fetchOptions = {
    ...options,
    headers,
  };

  try {
    const res = await fetch(url, fetchOptions);
    // For TTS endpoints, they may return binary audio (audio/mpeg); for demo we'll parse as blob or JSON
    if (!res.ok) {
      let errMsg = `ElevenLabs API error: ${res.status} ${res.statusText}`;
      try {
        const errBody = await res.json();
        errMsg += errBody?.message ? `, ${errBody.message}` : '';
      } catch (_) { }
      throw new Error(errMsg);
    }

    // Return audio blob for specific endpoints, otherwise JSON
    const contentType = res.headers.get('content-type');
    if (contentType && contentType.startsWith('audio/')) {
      return await res.blob();
    }
    return await res.json();
  } catch (error) {
    throw new Error(`Failed ElevenLabs API request: ${error.message}`);
  }
}

/**
 * PUBLIC_INTERFACE
 * Example: Generate speech audio from a prompt.
 * See https://docs.elevenlabs.io/api-reference/text-to-speech
 * @param {string} text - Text to generate speech for
 * @param {string} voiceId - Voice ID to use (see ElevenLabs docs or dashboard)
 * @returns {Promise<Blob>} - Audio Blob (e.g., audio/mpeg)
 */
export async function textToSpeech(text, voiceId = '21m00Tcm4TlvDq8ikWAM') {
  // 21m... is "Rachel" (default demo) voice ID
  // See docs for other options!
  const body = {
    text,
    model_id: "eleven_monolingual_v1",
    voice_settings: {
      stability: 0.5,
      similarity_boost: 0.75
    }
  };
  return elevenLabsApiRequest(`/text-to-speech/${voiceId}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Accept': 'audio/mpeg'
    }
  });
}

// Export core utility for custom usage.
export {
  elevenLabsApiRequest, // for advanced direct calls
  getElevenLabsApiKey,
};
