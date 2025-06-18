import React from 'react';
import './App.css';
import StabilityDemo from './StabilityDemo';
import ElevenLabsDemo from './ElevenLabsDemo';
import TMDBDemo from './TMDBDemo';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
            <button className="btn">Template Button</button>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="hero">
            <div className="subtitle">AI Workflow Manager Template</div>
            <h1 className="title">storycine_ai_frontend</h1>
            <div className="description">
              Start building your application.
            </div>
            <button className="btn btn-large">Button</button>
          </div>
          {/* SAMPLE: TMDB Integration Demo */}
          <TMDBDemo />
          {/* SAMPLE: Stability AI Integration Demo */}
          <StabilityDemo />
          {/* SAMPLE: ElevenLabs Text-to-Speech Integration Demo */}
          <ElevenLabsDemo />
        </div>
      </main>
    </div>
  );
}

export default App;