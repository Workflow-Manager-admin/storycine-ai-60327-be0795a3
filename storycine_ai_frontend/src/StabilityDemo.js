import React, { useState } from "react";
import { generateImageFromPrompt } from "./services/stabilityApi";

function StabilityDemo() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // PUBLIC_INTERFACE
  /**
   * Handles the form submission and calls the image generation endpoint.
   * @param {React.FormEvent} e
   */
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await generateImageFromPrompt(prompt);
      setResult(response); // Display the JSON for demo; in practice: render the image
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ marginTop: 48 }}>
      <h2>Stability AI Demo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a prompt for AI image generation"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
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
          disabled={loading || !prompt}
          className="btn"
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </form>
      {error && (
        <div style={{ color: "red", margin: "10px 0" }}>
          <strong>Error:</strong> {error}
        </div>
      )}
      <div style={{ marginTop: 16 }}>
        {result && (
          <pre
            style={{
              background: "#222",
              color: "#eee",
              padding: 12,
              borderRadius: 6,
              overflowX: "auto",
              maxWidth: 600
            }}
          >
            {JSON.stringify(result, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}

export default StabilityDemo;
