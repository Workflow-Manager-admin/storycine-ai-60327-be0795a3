# Lightweight React Template for KAVIA

This project provides a minimal React template with a clean, modern UI and minimal dependencies.

## Features

- **Lightweight**: No heavy UI frameworks - uses only vanilla CSS and React
- **Modern UI**: Clean, responsive design with KAVIA brand styling
- **Fast**: Minimal dependencies for quick loading times
- **Simple**: Easy to understand and modify

## Important Note: Babel Configuration

This project’s `package.json` includes a `babel` section with a plugin:

```json
"babel": {
"plugins": ["./.ve/babel-plugin-jsx-editor-id.js"]
}
```

This plugin enables **visual editing functionality** in supported tools.

**Warning for AI code agents and contributors:**
**DO NOT** remove or modify this section - it is ESSENTIAL for proper operation.
Removing it will break editor integration and visual editing features.

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

## Customization

### Colors

The main brand colors are defined as CSS variables in `src/App.css`:

```css
:root {
  --kavia-orange: #E87A41;
  --kavia-dark: #1A1A1A;
  --text-color: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.7);
  --border-color: rgba(255, 255, 255, 0.1);
}
```

### Components

This template uses pure HTML/CSS components instead of a UI framework. You can find component styles in `src/App.css`. 

Common components include:
- Buttons (`.btn`, `.btn-large`)
- Container (`.container`)
- Navigation (`.navbar`)
- Typography (`.title`, `.subtitle`, `.description`)

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

---

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
