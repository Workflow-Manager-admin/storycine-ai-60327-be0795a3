import React from 'react';

// PUBLIC_INTERFACE
/**
 * Animated progress indicator showing current state of process.
 * @param {Object} props
 * @param {string} [props.story] - The story that is being processed (for context)
 * @param {string} [props.progressStatus] - Current status message
 * @param {string} [props.accentColor]
 */
function ProgressIndicator({ story, progressStatus = "", accentColor = "#FFD700" }) {
  // Dot animation for activity signal
  const [dots, setDots] = React.useState(".");
  React.useEffect(() => {
    const t = setInterval(() => {
      setDots(dots => (dots.length < 3 ? dots + "." : "."));
    }, 600);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{
      minHeight: 190,
      padding: "26px 10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <div
        style={{
          fontWeight: 600,
          color: accentColor,
          fontSize: 18,
          marginBottom: 14
        }}
      >
        Your cinematic story is coming to life!
      </div>
      <div style={{
        color: "#222",
        minHeight: 25,
        marginBottom: 13,
        fontSize: 16
      }}>
        {progressStatus || "Processing"}
        <span style={{ fontWeight: 800, color: accentColor }}>{dots}</span>
      </div>
      <div style={{
        width: "90%",
        background: "#f3f3d8",
        borderRadius: 8,
        padding: 14,
        fontSize: 15,
        color: "#888",
        margin: "0 auto"
      }}>
        <b>Input:</b> <span>{story?.length ? story.slice(0, 120) + (story.length > 120 ? "..." : "") : ""}</span>
      </div>
      {/* Basic loader bar */}
      <div style={{
        marginTop: 32,
        width: 130,
        background: "#ddd",
        height: 8,
        borderRadius: 4,
        overflow: "hidden"
      }}>
        <div style={{
          width: "64%",
          height: "100%",
          background: accentColor,
          transition: "width .9s",
          animation: "scanningbar 2.9s infinite linear"
        }} />
      </div>
      <style>
        {`@keyframes scanningbar {
          0% {width:20%;}
          30% {width:93%;}
          80% {width:60%;}
          100% {width:20%;}
        }`}
      </style>
    </div>
  );
}

export default ProgressIndicator;
