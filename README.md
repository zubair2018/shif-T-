# Shifty (Monorepo)

This repository contains two main parts:

- `server/` — Express backend (has fallback in-memory store for quick local testing)
- `client/` — React frontend (Vite)

## Quick start (local development)

1. Install dependencies (from repo root):

```bash
# server
cd server
npm install

# client
cd ../client
npm install
```

2. Start the backend (dev mode with nodemon):

```bash
cd server
npm run dev
```

3. Start the frontend (Vite dev server):

```bash
cd client
npm run dev
```

4. Run tests:

```bash
# server
cd server
npm test
```

Notes:
- Set `MONGODB_URI` in `server/.env` to enable persistent storage via MongoDB; otherwise the server uses an in-memory store.
- Frontend runs at `http://localhost:5173` and expects the API at `http://localhost:4000` by default.

---

If you want, I can add convenience npm scripts to run both servers together (using `concurrently`) or add a Docker Compose file for easy local orchestration.