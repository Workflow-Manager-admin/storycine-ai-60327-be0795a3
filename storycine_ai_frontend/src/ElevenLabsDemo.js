import React, { useState, useRef } from "react";
import { textToSpeech } from "./services/elevenLabsApi";

// PUBLIC_INTERFACE
/**
 * Demo component: Shows text-to-speech with ElevenLabs API.
 * Users enter text, click Generate, and hear the AI voice.
 */
function ElevenLabsDemo() {
  const [text, setText] = useState("");
  const [audioUrl, setAudioUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const audioRef = useRef();

  // PUBLIC_INTERFACE
  /**
   * Handles form submit for speech generation.
   */
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setAudioUrl(null);
    try {
      // You could let user select the voiceId; fixed for demo
      const audioBlob = await textToSpeech(text);
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);
      // Optional: auto-play after load
      setTimeout(() => audioRef.current?.play(), 150);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ marginTop: 48 }}>
      <h2>ElevenLabs Text-to-Speech Demo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Enter text for AI speech (e.g., "Hello world!")'
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            padding: "10px",
            width: 320,
            maxWidth: "80%",
            border: "1px solid #ccc",
            borderRadius: 4,
            marginRight: 8
          }}
        />
        <button
          type="submit"
          disabled={loading || !text}
          className="btn"
        >
          {loading ? "Generating..." : "Generate Voice"}
        </button>
      </form>
      {error && (
        <div style={{ color: "red", margin: "10px 0" }}>
          <strong>Error:</strong> {error}
        </div>
      )}
      <div style={{ marginTop: 16 }}>
        {audioUrl && (
          <audio
            ref={audioRef}
            src={audioUrl}
            controls
            autoPlay
            style={{ width: 300 }}
          />
        )}
      </div>
    </div>
  );
}

export default ElevenLabsDemo;
