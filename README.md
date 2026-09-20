# Zyvron Tech Accessories — MERN + Next.js rebuild

This replaces the old single-file `index.html` / `script.js` / Firebase site (still untouched at the
repo root for reference) with a real backend and an SEO-ready frontend:

- **`/server`** — Node + Express + MongoDB (Mongoose) API. JWT auth (access token + httpOnly refresh
  cookie), forgot/reset-password email via Nodemailer (Gmail SMTP), products/categories/coupons/orders
  /reviews/subscribers/complaints, admin routes, CSV order export.
- **`/client`** — Next.js (App Router) storefront + admin panel. Server-rendered/ISR product and
  category pages, per-page metadata, JSON-LD (Organization/WebSite/Product/BreadcrumbList),
  `sitemap.xml`, `robots.txt`.

## 1. Prerequisites

- Node.js 18+
- A MongoDB database — either install MongoDB locally, or (recommended, since nothing needs to be
  installed) create a free cluster at MongoDB Atlas and copy its connection string.
- A Gmail account with a Google **App Password** (not your normal password) for SMTP:
  https://myaccount.google.com/apppasswords

> **Disk space note:** while building this, the `C:` drive had 0 bytes free, which broke `npm install`
> (`ENOSPC`) and some tool output capture. If `npm install` fails with `ENOSPC` for you too, either free
> up space on `C:`, or point npm's cache at a drive with room: `npm install --cache "D:\npm-cache"`.

## 2. Backend setup (`/server`)

```bash
cd server
npm install
cp .env.example .env
```

Edit `.env`:

| Variable | Purpose |
|---|---|
| `MONGODB_URI` | your MongoDB connection string |
| `JWT_ACCESS_SECRET` / `JWT_REFRESH_SECRET` | set these to long random strings |
| `SMTP_USER` / `SMTP_PASS` | your Gmail address + app password |
| `CLIENT_URL` | `http://localhost:3000` (used for CORS and email reset links) |
| `ADMIN_EMAIL` / `ADMIN_PASSWORD` / `ADMIN_NAME` | credentials for the one admin account the seed script creates |

Then seed the database and start the API:

```bash
npm run seed     # loads the 13 products ported from the old script.js, plus the admin account
npm run dev      # http://localhost:5000  (GET /api/health should return {"status":"ok"})
```

## 3. Frontend setup (`/client`)

```bash
cd client
npm install
cp .env.local.example .env.local   # defaults already point at http://localhost:5000/api
npm run dev      # http://localhost:3000
```

## 4. First run checklist

1. Visit `http://localhost:3000` — home page should show the category grid and flash-sale/popular
   products pulled live from the API.
2. Log in at `/login` with `ADMIN_EMAIL`/`ADMIN_PASSWORD` → the `/admin` section (products, orders,
   coupons, subscribers, complaints) should be reachable.
3. Place a guest order via checkout → note the `TP-XXXXXX` tracking number → look it up at
   `/track-order`.
4. In `/admin/orders`, change that order's status → confirm the customer status-update email fires
   (or check the server log if SMTP isn't configured yet) and the Track Order page reflects the new
   status within ~15s (it polls).
5. Try **Forgot password** at `/forgot-password` with the admin email → confirm the reset email
   arrives → reset → log in with the new password.
6. View source on `/` and any `/product/[slug]` page to confirm real SEO content is present
   (not an empty shell): meta tags, canonical URL, and `<script type="application/ld+json">` blocks.
   Fetch `/sitemap.xml` and `/robots.txt` directly to confirm they list real product/category URLs.

## 5. What changed vs. the old Firebase version (intentionally)

- Order totals are recomputed **server-side** from live product prices at checkout — the client's
  numbers are never trusted (the old Firestore-rules model couldn't enforce this).
- New orders are created with status `pending` (the old code set `customerStatus: 'accepted'`
  immediately, which was a bug).
- Order totals now correctly include the shipping fee (the old code's stored `total` excluded it even
  though the checkout UI displayed it as included).
- Products have a real numeric `stock` count, decremented per order, instead of just a boolean
  `inStock` flag.
- Review "helpful" votes are de-duplicated server-side instead of relying on client localStorage only.
- Admin role is a `role: 'admin'` field on a `User` document (checked by JWT middleware), replacing the
  old `admins/{uid}` Firestore allowlist that had to be populated manually via the Firebase Console.
- Coupons get a real admin CRUD UI (the old site had the backend logic but no UI wired to it), plus
  `minOrderAmount`/`expiresAt`/`usageLimit` fields the old model didn't have.

## 6. Not yet done / deliberately deferred

- **Payment gateway**: Cash on Delivery only, by design (per your choice) — `Order.paymentMethod` is an
  enum so Stripe/JazzCash/EasyPaisa can be added later without a schema change.
- **Firestore data migration**: none was done (per your choice) — only the product catalog was ported.
  Existing Firebase orders/admins/coupons/subscribers/complaints stay in Firebase, untouched.
- **Deployment**: nothing has been deployed. Suggested path when you're ready: MongoDB Atlas for the
  database, a Node host (Render/Railway/VPS) for `/server`, and Vercel for `/client`.
