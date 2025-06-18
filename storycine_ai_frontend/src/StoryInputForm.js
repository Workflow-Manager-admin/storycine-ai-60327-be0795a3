import React, { useState } from "react";

// PUBLIC_INTERFACE
/**
 * Story Input Form for StoryCine AI.
 * Allows user to enter their story. Calls onSubmit(story) upon submit.
 * @param {Object} props
 * @param {function(string):void} props.onSubmit - callback when story submitted
 * @param {string} [props.accentColor]
 * @param {boolean} [props.disabled]
 */
function StoryInputForm({ onSubmit, accentColor = "#FFD700", disabled = false }) {
  const [story, setStory] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // Simple validation: require some length
    if (!story.trim() || story.length < 10) {
      setError("Please enter a story (at least 10 characters).");
      return;
    }
    setError("");
    onSubmit(story);
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <label htmlFor="storyInput" style={{
        fontWeight: 600,
        color: accentColor
      }}>
        Enter your story:
      </label>
      <textarea
        id="storyInput"
        value={story}
        onChange={e => setStory(e.target.value)}
        rows={6}
        style={{
          width: "100%",
          padding: 14,
          margin: "12px 0 0 0",
          borderRadius: 8,
          border: `1.3px solid ${accentColor}80`,
          resize: "vertical",
          fontSize: 17,
          letterSpacing: ".01em"
        }}
        placeholder='Share a personal story or a life event (the AI will generate a cinematic video from this input)...'
        disabled={disabled}
      />
      <div style={{ marginTop: 10 }}>
        <button
          type="submit"
          disabled={disabled || !story.trim()}
          className="btn btn-large"
          style={{
            background: accentColor,
            color: "#191919",
            fontWeight: 700,
            boxShadow: "0 0 18px #ffd70036"
          }}
        >Generate Cinematic Video</button>
      </div>
      {error &&
        <div style={{ color: "crimson", marginTop: 8, fontWeight: 500 }}>
          {error}
        </div>
      }
      <div style={{
        fontSize: 13.5,
        color: "#666",
        marginTop: 11,
        lineHeight: 1.28
      }}>
        <em>For best results, describe a meaningful event. No data is stored.</em>
      </div>
    </form>
  );
}

export default StoryInputForm;
