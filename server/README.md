# Shifty Server

Local development instructions

1. Install dependencies:

```bash
cd server
npm install
```

2. Create `.env` (copy `.env.example`) and set:
- `MONGODB_URI` (optional for full functionality; if not set the server uses in-memory fallback)
- `JWT_SECRET` (set a strong secret)
- `CORS_ORIGIN` (frontend origin, e.g. `http://localhost:5173`)
- `ADMIN_EMAIL` and `ADMIN_PASSWORD` to seed an admin user (optional)

3. Start server in dev mode:

```bash
npm run dev
```

4. To seed an admin user (if MongoDB is configured):

```bash
# with env
ADMIN_EMAIL=admin@example.com ADMIN_PASSWORD=secret npm start
# or set vars in .env and restart
```

5. Run tests:

```bash
npm test
```

Notes:
- When `MONGODB_URI` is provided the server uses MongoDB via Mongoose.
- If `MONGODB_URI` is not set, the server falls back to a short-lived in-memory store for bookings (useful for quick local testing).
