# Shifty Server

Backend API for bookings, drivers and partners.

## Local development

1. Install dependencies:

```bash
cd server
npm install
```

2. Configure Firebase Admin credentials:

- Add `serviceAccountKey.json` in `server/` (or replace existing one with valid credentials).
- Ensure the service account has Firestore access.

3. Start the server:

```bash
npm run dev
```

4. Verify health:

```bash
curl http://localhost:4000/health
```

## API routes

- `GET /api/bookings`
- `POST /api/bookings`
- `PATCH /api/bookings/:id/status`
- `POST /api/bookings/:id/accept`
- `POST /api/bookings/:id/reject`
- `POST /api/drivers/register`
- `GET /api/drivers`
- `POST /api/drivers/:id/verify`
- `POST /api/drivers/:id/reject`
- `POST /api/partners/register`
- `GET /api/partners`
