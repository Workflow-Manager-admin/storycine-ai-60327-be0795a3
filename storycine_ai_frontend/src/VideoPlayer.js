import React from "react";

// PUBLIC_INTERFACE
/**
 * Video player for the generated cinematic video.
 * Shows video, supports restart, and offers accent styling.
 * @param {Object} props
 * @param {string} props.videoUrl - url of the video to display
 * @param {Function} props.onRestart - callback for restarting the workflow
 * @param {string} [props.accentColor]
 */
function VideoPlayer({ videoUrl, onRestart, accentColor = "#FFD700" }) {
  return (
    <div style={{
      maxWidth: 650,
      margin: "auto",
      textAlign: "center"
    }}>
      <h2 style={{
        color: accentColor,
        margin: "0 0 12px"
      }}>Your Cinematic Biopic</h2>
      <video
        src={videoUrl}
        controls
        autoPlay
        style={{
          width: "99%",
          height: 340,
          maxHeight: "42vw",
          borderRadius: 13,
          boxShadow: "0 5px 24px #ffc80045"
        }}
      >
        Sorry, your browser does not support embedded videos.
      </video>
      <div style={{ marginTop: 28 }}>
        <button
          className="btn btn-large"
          style={{
            background: accentColor,
            color: "#191919",
            fontWeight: 600,
            border: 0
          }}
          onClick={onRestart}
        >Create Another Story</button>
      </div>
    </div>
  );
}
export default VideoPlayer;
