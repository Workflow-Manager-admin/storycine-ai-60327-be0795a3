#!/bin/bash
cd /home/kavia/workspace/code-generation/storycine-ai-60327-be0795a3/storycine_ai_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

