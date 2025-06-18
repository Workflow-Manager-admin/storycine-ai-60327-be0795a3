import React, { useState } from 'react';
import './App.css';
// Demo integrations
import StabilityDemo from './StabilityDemo';
import ElevenLabsDemo from './ElevenLabsDemo';
import TMDBDemo from './TMDBDemo';
// StoryCine Main Components
import StoryInputForm from './StoryInputForm';
import ProgressIndicator from './ProgressIndicator';
import VideoPlayer from './VideoPlayer';

/**
 * PUBLIC_INTERFACE
 * Main application container for StoryCine AI.
 * Includes all service integrations, demos, and StoryCine experience UI.
 */
function App() {
  // App state to coordinate the story submission/workflow.
  const [submittedStory, setSubmittedStory] = useState('');
  const [processing, setProcessing] = useState(false); // For progress indicator
  const [videoUrl, setVideoUrl] = useState(null); // URL for final cinematic biopic
  const [progressStatus, setProgressStatus] = useState(""); // For more granular progress info

  /**
   * Handles story submission. Integrate backend API/process trigger here.
   * For now, we mock the flow and emulate progress.
   * @param {string} story
   */
  const handleStorySubmit = async (story) => {
    setSubmittedStory(story);
    setProcessing(true);
    setVideoUrl(null);
    setProgressStatus("Received story. Using AI to generate script...");
    // MOCK scenario: Show simulated sequential progress
    setTimeout(() => setProgressStatus("Generating visuals (Stability AI)..."), 2000);
    setTimeout(() => setProgressStatus("Generating audio (ElevenLabs)..."), 4500);
    setTimeout(() => setProgressStatus("Compositing video..."), 7000);
    // Mock: Finalize after ~9 seconds
    setTimeout(() => {
      setProcessing(false);
      setProgressStatus("");
      // Example placeholder video (replace with API-fetched video URL)
      setVideoUrl("https://samplelib.com/mp4/sample-5s.mp4");
    }, 9500);
  };

  /**
   * Resets the story workflow to start over.
   */
  const handleRestart = () => {
    setSubmittedStory('');
    setProcessing(false);
    setVideoUrl(null);
    setProgressStatus("");
  };

  // Color palette constants used (could also be CSS vars)
  const colorSpec = {
    primary: "#0e0f10",
    secondary: "#fffbfa",
    accent: "#FFD700"
  };

  return (
    <div className="app" style={{ background: colorSpec.primary, color: colorSpec.secondary, minHeight: "100vh" }}>
      <nav className="navbar" style={{ background: colorSpec.primary, color: colorSpec.accent }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo" style={{ color: colorSpec.accent }}>
              <span className="logo-symbol" style={{ color: colorSpec.accent, fontSize: 30 }}>★</span>
              <span>StoryCine AI</span>
            </div>
            <a
              href="https://github.com/your-repo/storycine-ai"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: colorSpec.accent,
                color: "#222",
                fontWeight: 600
              }}
            >GitHub</a>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <section className="hero" style={{
            paddingTop: 110,
            paddingBottom: 48,
            textAlign: "center"
          }}>
            <div className="subtitle" style={{ color: colorSpec.accent, fontWeight: 500, fontSize: "1.2rem" }}>
              Transform your story into cinematic magic
            </div>
            <h1 className="title" style={{
              color: colorSpec.secondary,
              textShadow: `0 2px 24px ${colorSpec.accent}30`,
              fontSize: "3.2rem"
            }}>
              StoryCine AI
            </h1>
            <div className="description" style={{
              color: "#888",
              fontSize: "1.12rem",
              marginBottom: 16,
              maxWidth: 650,
              margin: "0 auto 24px"
            }}>
              Enter your story, watch it become cinematic. <br />
              StoryCine uses generative AI for visuals, voice, and editing.<br />
              <span style={{ color: colorSpec.accent, fontWeight: 600 }}>Powered by: Stability AI, ElevenLabs, TMDB</span>.
            </div>
          </section>

          {/* Main StoryCine Workflow Section */}
          <section
            style={{
              background: "#fff",
              borderRadius: 18,
              boxShadow: "0 2px 24px rgba(14,15,16,.19)",
              padding: 32,
              marginBottom: 44,
              maxWidth: 780,
              marginInline: "auto",
              color: "#18181a"
            }}
          >
            {/* Story input form */}
            {!submittedStory && (
              <StoryInputForm
                accentColor={colorSpec.accent}
                onSubmit={handleStorySubmit}
                disabled={processing}
              />
            )}
            {/* Progress display */}
            {submittedStory && processing && (
              <ProgressIndicator
                story={submittedStory}
                progressStatus={progressStatus}
                accentColor={colorSpec.accent}
              />
            )}
            {/* Video player */}
            {submittedStory && !processing && videoUrl && (
              <VideoPlayer
                videoUrl={videoUrl}
                onRestart={handleRestart}
                accentColor={colorSpec.accent}
              />
            )}
          </section>

          {/* Divider for demos (could use accent color) */}
          <div style={{
            borderBottom: `2px dashed ${colorSpec.accent}`,
            margin: "38px 0 24px"
          }} />

          {/* Demo Zone (APIs showcase) */}
          <section
            id="demoZone"
            style={{
              background: colorSpec.primary,
              borderRadius: 12,
              padding: 24,
              color: colorSpec.secondary,
              marginBottom: 40
            }}
          >
            <h2 style={{
              fontWeight: 600,
              color: colorSpec.accent,
              fontSize: "2rem",
              marginBottom: "0.4em"
            }}>API Integrations Showcase</h2>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 32,
              alignItems: "stretch",
              justifyContent: "space-between"
            }}>
              <div style={{ flex: "1 1 270px", minWidth: 280 }}>
                <TMDBDemo />
              </div>
              <div style={{ flex: "1 1 270px", minWidth: 280 }}>
                <StabilityDemo />
              </div>
              <div style={{ flex: "1 1 310px", minWidth: 310 }}>
                <ElevenLabsDemo />
              </div>
            </div>
            <div style={{
              textAlign: "center",
              marginTop: 40,
              fontSize: "0.98rem",
              color: "#aaa"
            }}>
              Demos use <b style={{ color: colorSpec.accent }}>Stability AI</b> (image gen),
              <b style={{ color: colorSpec.accent }}> ElevenLabs</b> (voice),
              <b style={{ color: colorSpec.accent }}> TMDB</b> (movies API)
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;