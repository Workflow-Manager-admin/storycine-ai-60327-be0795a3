# StoryCine AI Frontend

This project delivers the StoryCine AI main container—a modern, production-ready React frontend that transforms user stories into cinematic biopics using AI.

## Features

- **Story Input Form**: Clean, minimal, user-focused form for text story input.
- **Progress Indicator**: Modern, animated progress feedback during AI processing stages.
- **Video Player**: Polished, accent-colored player for final cinematic video, with workflow restart.
- **API Integrations / Demos**: Live demos for Stability AI (image gen), ElevenLabs (speech), and TMDB (movies) in a modular, secure way.
- **Modern Design**: Light/clean layout, large accent branding, mobile-friendly.
- **Colors**: 
    - Primary: `#0e0f10` 
    - Secondary: `#fffbfa`
    - Accent: `#FFD700` (used for highlights, actions, progress, CTA)

## Usage Notes

### StoryCine Workflow UI

The main workflow is implemented in `src/App.js` and subcomponents:
- `StoryInputForm`: Use to collect stories (see props).
- `ProgressIndicator`: Shows different status messages and a loader.
- `VideoPlayer`: Shows the generated video and allows restarting.

### API Demos

Demo components for each external service are shown on the homepage:
- `src/TMDBDemo.js`
- `src/StabilityDemo.js`
- `src/ElevenLabsDemo.js`

Integrations are fully modular:
- Services are in `src/services/`
- API keys are loaded securely from `.env` as documented.

### Theming/Styling

- Brand CSS variables are defined in `src/App.css`:
  - Updates: `--base-light` `--base-dark` `--accent`
- Uses only vanilla CSS and inline accent style overrides for key elements.
- Modern light layout, with clear call to action.

### Production/Customization

- You can slot your backend API for `/generate`, `/status`, `/video` within the workflow in `App.js`.
- StoryCine is modular: swap/extend subcomponents as desired.

---

## (Legacy) Kavia Base Template Notes

_... (legacy instructions retained for contributors familiar with the original template) ..._

## TMDB API Integration (Developer Guide)

This project includes a reusable service for communicating with the [TMDB API](https://www.themoviedb.org/documentation/api), located at `src/services/tmdbApi.js`.

### ⚠️ How to Set Up Your TMDB API Key Securely

**NEVER** hardcode your TMDB API key in source files or share your .env publicly.

#### Use a `.env` file!

1. Create a file named `.env` in the `storycine_ai_frontend/` folder (alongside `package.json`).

2. Add your TMDB API key:
    ```
    REACT_APP_TMDB_API_KEY=5bc67d3b06aecbd18121a3cbbc16eb59
    ```
3. Restart your development server after changes to the `.env` file.

4. The React app will pick up this key at runtime and sends it to TMDB only in browser requests.

#### Sample Usage

- See `src/TMDBDemo.js` for an interactive usage example.
- For advanced usage, import and call functions from `src/services/tmdbApi.js`.
- You may access `searchMovies(query)` or extend as needed (e.g., get movie details).

**Security notes:**
- Never expose your API key publicly.
- Do not commit `.env` to source control.
- See TMDB’s terms for proper API usage.

---

## Stability AI API Integration (Developer Guide)

This project includes a reusable service for communicating with the [Stability AI API](https://platform.stability.ai/), located at `src/services/stabilityApi.js`.

### ⚠️ How to Set Up Your Stability API Key Securely

**NEVER** hardcode your API key in the JavaScript files or commit it to source control.

#### Use a `.env` file!

1. Create a file named `.env` in the `storycine_ai_frontend/` folder (alongside `package.json`).

2. Add your Stability API key:
    ```
    REACT_APP_STABILITY_API_KEY=sk-your-api-key-here
    ```

3. Restart your development server after any change to the `.env` file.

4. The React app will pick up this key at runtime and securely send it in the Authorization header to the Stability API.

### Sample Usage

- See `src/StabilityDemo.js` for an interactive example of how to call the Stability API from a frontend component.
- For advanced usage, import functions from `src/services/stabilityApi.js`.

**Important security notes:**
- Never expose your secret API key in public repositories or client-side logs.
- Consider using a backend proxy for stricter security if you distribute your frontend broadly.

---

## ElevenLabs API Integration

- The project includes a reusable ElevenLabs text-to-speech service and a sample component as a demo.
- Add your ElevenLabs API key to `.env` as `REACT_APP_ELEVENLABS_API_KEY`.
- See `src/ElevenLabsDemo.js` and `src/services/elevenLabsApi.js` for details.

---

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
