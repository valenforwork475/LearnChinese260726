# Pronunciation assessment setup

The Flashcard microphone uses Azure Speech Pronunciation Assessment with a
fixed Mandarin (`zh-CN`) reference word. The browser records a short clip,
converts it to mono 16 kHz PCM WAV, and sends it to the same-origin Vercel API.
The Azure key is used only inside the serverless function.

## Vercel environment variables

Create an Azure Speech resource, then add these variables to the Vercel project:

- `AZURE_SPEECH_KEY`: key from **Keys and Endpoint**
- `AZURE_SPEECH_REGION`: resource region, for example `southeastasia`

Apply them to Production, Preview, and Development as needed, then redeploy.
Do not prefix these variables with `VITE_`; that would expose them to browsers.

## API safeguards

The endpoint accepts only a short reference string and a WAV payload smaller
than 700 KB. It also applies a small per-instance request limit. For a public
high-traffic deployment, add a Vercel Firewall rate-limit rule for
`/api/pronunciation-assessment`.
