# storycine-ai-60327-be0795a3

## Environment Variable Setup for API Keys

For all development, create a `.env` file in the `storycine_ai_frontend/` folder next to `package.json` with the following contents:

```
REACT_APP_STABILITY_API_KEY=sk-your-stability-api-key-here
REACT_APP_ELEVENLABS_API_KEY=sk-your-elevenlabs-api-key-here
```

Never commit your `.env` file or API tokens to version control. Refer to `storycine_ai_frontend/README.md` for detailed configuration and best practices.