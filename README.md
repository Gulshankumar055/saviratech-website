# Saviratech React Website

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Create environment file:

```bash
cp .env.example .env
```

3. Add your OpenAI key in `.env`:

```env
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4.1-mini
PORT=8787
VITE_CHAT_API_URL=/api/chat
```

4. Run frontend + AI backend together:

```bash
npm run dev:all
```

Frontend runs on Vite port and API runs on `http://localhost:8787`.

## AI Chatbot Behavior

- Frontend calls `/api/chat` by default.
- During development, Vite proxy forwards `/api/*` to the backend server.
- If API is down/unavailable, chatbot falls back to local rule-based responses, so UI does not break.

## Single Source Service Data

- Service details are maintained in `src/data/servicesData.js`.
- Home Services section and chatbot both use this file.
- Update prices/features there once, and both UI + chatbot stay in sync.

## Production Deployment Checklist

1. Ensure `.env` is configured on server (do not commit it).
2. Build frontend:

```bash
npm run build
```

3. Start AI API server in production:

```bash
npm run start:api
```

4. Serve `dist/` via your hosting platform (Nginx/Apache/Vercel/Netlify etc).
5. Route `/api/chat` to the Node backend service in production (reverse proxy).

## Git Safety

- `node_modules/` is ignored in `.gitignore`.
- `.env` and secret env files are ignored.
- `dist/` build output is ignored.
