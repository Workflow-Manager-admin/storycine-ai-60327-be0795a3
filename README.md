# storycine-ai-60327-be0795a3

## Environment Variable Setup for API Keys

For all development, create a `.env` file in the `storycine_ai_frontend/` folder next to `package.json` with the following contents:

```
REACT_APP_STABILITY_API_KEY=sk-your-stability-api-key-here
REACT_APP_ELEVENLABS_API_KEY=sk-your-elevenlabs-api-key-here
REACT_APP_TMDB_API_KEY=5bc67d3b06aecbd18121a3cbbc16eb59
```

Never commit your `.env` file or API tokens to version control. Refer to `storycine_ai_frontend/README.md` for detailed configuration and best practices.

## TMDB API Integration

- The frontend uses [The Movie Database (TMDB)](https://www.themoviedb.org/) API for demo movie search.
- Place your TMDB API key in `.env` as `REACT_APP_TMDB_API_KEY` (see above).
- A sample TMDB movie search demo is shown on the homepage (see `TMDBDemo`).
- See full usage and expansion guide in `storycine_ai_frontend/README.md`.