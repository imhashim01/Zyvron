# Deploying Zyvron to Vercel — Step-by-Step Guide

You chose **two separate Vercel projects**: one for `client/` (the Next.js storefront) and one for `server/` (the Express API), each getting its own `*.vercel.app` domain. The code changes this requires (serverless entry point, cross-site cookie fix, etc.) are already made and committed to your project — see "What's already done" below. This guide covers everything left: pushing to GitHub, setting up a cloud database, creating the two Vercel projects, and getting their environment variables right.

Total time: roughly 30–45 minutes if you have your SMTP/JWT/Cloudinary values handy already.

## What's already done (no action needed here)

Five files in `server/` were updated so the Express API can run as a Vercel serverless function instead of a traditional `node server.js` process, and so login sessions survive the frontend and backend being on two different domains:

- `server/api/index.js` (new) — the serverless entry point Vercel will actually run.
- `server/vercel.json` (new) — tells Vercel to route every request to that entry point.
- `server/src/utils/tokens.js` — the refresh-token cookie now uses `SameSite=None` in production so it's sent correctly across the two different domains.
- `server/src/config/db.js` — the database connection is now reused across warm serverless invocations instead of reconnecting on every request.
- `server/src/app.js` — added `trust proxy` so rate-limiting works correctly behind Vercel's proxy.
- `server/package.json` — pinned to Node 20.x.

None of this changes local development — `npm run dev` in `server/` still works exactly as before.

---

## Step 0: Push the project to GitHub

Vercel deploys from a Git repository, so this has to happen first. From your earlier `git commit` question, you have a local repo but it looked like nothing had been committed yet. In the project root (`D:\Web development business\LOGO 2`):

```
git add -A
git commit -m "Prepare for Vercel deployment"
```

If you haven't created a GitHub repo for this project yet:

1. Go to github.com and create a new repository (private is fine — Vercel can deploy from a private repo).
2. Don't initialize it with a README/gitignore (you already have those locally).
3. Connect and push:

```
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

If you already have a GitHub remote set up, just `git push`.

**Double-check before pushing:** your `.gitignore` already correctly excludes `.env`, `node_modules`, and `.next` (confirmed earlier this session), so your real secrets won't end up on GitHub. Good to go.

---

## Step 1: Set up MongoDB Atlas (cloud database)

Your app currently talks to a local MongoDB, which Vercel's servers can't reach. MongoDB Atlas is MongoDB's official free-tier cloud hosting — this is the standard pairing with Vercel.

1. Go to mongodb.com/cloud/atlas and create a free account (or sign in).
2. Create a new free cluster (the M0 free tier is enough for this).
3. **Database Access** (left sidebar): create a database user with a username and password — save these, you'll need them for the connection string. Use "Password" authentication.
4. **Network Access** (left sidebar): add an IP entry allowing `0.0.0.0/0` ("Allow access from anywhere"). This is necessary because Vercel's serverless functions run from a changing pool of IP addresses, not one fixed address. (Atlas free tier doesn't support IP-restricted access working reliably with serverless platforms — this is a normal, expected setup for a Vercel + Atlas pairing, not a security downgrade unique to your project — access is still gated by the username/password.)
5. **Database → Connect → Drivers**: copy the connection string. It looks like:
   ```
   mongodb+srv://<username>:<password>@<cluster-name>.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
6. Edit it: replace `<username>`/`<password>` with your real values, and add a database name before the `?` — e.g. `.../zyvron?retryWrites=true&w=majority`. This final string is your `MONGODB_URI`.

Keep this connection string somewhere private (a password manager, or right next to your other `.env` values) — you'll paste it into Vercel in Step 2, never into this chat.

**Optional but recommended:** if you want your existing local product/category/order data to carry over instead of starting with an empty database, you can migrate it with `mongodump`/`mongorestore` (dumps your local MongoDB, restores into Atlas) — say the word if you'd like help with that command once you're ready; it's not required to get the site live.

---

## Step 2: Deploy the backend (`server/`) to Vercel

1. Go to vercel.com, sign in (you already have an account — team "Mohammad Hashim's projects").
2. **Add New → Project**, import the GitHub repo you just pushed.
3. Vercel will ask for the project settings — this is the part that matters:
   - **Root Directory**: click Edit, select `server`. This tells Vercel to treat `server/` as its own project, ignoring `client/` entirely.
   - **Framework Preset**: Vercel usually can't auto-detect a bare Express app — set it to **Other**.
   - **Build Command**: leave empty (there's no build step for the Express API).
   - **Output Directory**: leave as default/empty.
   - **Install Command**: leave as default (`npm install`).
4. **Environment Variables** — add each of these (Name / Value), all as plain strings, no quotes:

   | Name | Value |
   |---|---|
   | `MONGODB_URI` | your Atlas connection string from Step 1 |
   | `JWT_ACCESS_SECRET` | a long random string (generate one — see note below) |
   | `JWT_ACCESS_EXPIRES` | `15m` |
   | `JWT_REFRESH_SECRET` | a **different** long random string |
   | `JWT_REFRESH_EXPIRES` | `7d` |
   | `NODE_ENV` | `production` |
   | `CLIENT_URL` | *(see note below — best-guess for now)* |
   | `SMTP_HOST` | your real value from local `server/.env` |
   | `SMTP_PORT` | your real value |
   | `SMTP_USER` | your real value |
   | `SMTP_PASS` | your real value |
   | `EMAIL_FROM` | your real value |
   | `ADMIN_EMAIL` | your real value |
   | `ADMIN_PASSWORD` | your real value |
   | `ADMIN_NAME` | your real value |
   | `ORDER_NOTIFY_EMAIL` | `zyvron.official@gmail.com` (or your real value) |
   | `CLOUDINARY_CLOUD_NAME` | your real value (once you've set up Cloudinary per Session 12's notes) |
   | `CLOUDINARY_API_KEY` | your real value |
   | `CLOUDINARY_API_SECRET` | your real value |

   **On the JWT secrets:** generate two different random strings — e.g. run `node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"` twice on your own machine and use one for each. Don't reuse your local dev secrets if you'd rather keep production sessions independent, though reusing them is also fine.

   **On `CLIENT_URL`:** this is the circular-dependency problem mentioned in the audit doc — you don't know your frontend's real Vercel URL until you deploy it in Step 3, and you don't know your backend's real URL (needed for the frontend's env var) until you deploy it here first. For now, enter your best guess of what the frontend project's URL will be (Vercel names projects after the repo by default, so if your repo is named e.g. `zyvron`, it'll likely be `https://zyvron.vercel.app` or `https://zyvron-<something>.vercel.app`) — it doesn't have to be exact, since you'll correct it in Step 4 regardless.

5. Click **Deploy**. Vercel will build and deploy — this project has no real "build" step, so it should be quick.
6. Once deployed, copy the project's URL (something like `https://zyvron-server.vercel.app`). Test it works by visiting `https://<that-url>/api/health` in your browser — you should see `{"status":"ok"}`. If you get an error instead, see Troubleshooting below before moving on.

---

## Step 3: Deploy the frontend (`client/`) to Vercel

1. Back on vercel.com, **Add New → Project** again, same GitHub repo.
2. **Root Directory**: click Edit, select `client`.
3. **Framework Preset**: Vercel should auto-detect **Next.js** — leave it.
4. Leave Build/Output/Install commands as their Next.js defaults.
5. **Environment Variables**:

   | Name | Value |
   |---|---|
   | `NEXT_PUBLIC_API_URL` | `https://<your-backend-url-from-step-2>/api` (include the `/api` suffix) |
   | `NEXT_PUBLIC_SITE_URL` | leave blank for now — you'll know this project's own URL only after this deploy finishes; come back and set it once you do (used for SEO/sitemap links) |

6. Click **Deploy**.
7. Once deployed, copy this project's real URL (e.g. `https://zyvron.vercel.app`).
8. Go back into this frontend project's Environment Variables and set `NEXT_PUBLIC_SITE_URL` to that same URL, then redeploy (Vercel → Deployments → the "..." menu on the latest deployment → Redeploy) so the build picks it up.

---

## Step 4: Close the loop — fix the backend's `CLIENT_URL`

Now that you have the frontend's real URL from Step 3:

1. Go to the **backend** (`server`) Vercel project → Settings → Environment Variables.
2. Edit `CLIENT_URL` to the frontend's real URL from Step 3 (e.g. `https://zyvron.vercel.app` — no trailing slash).
3. Redeploy the backend project (Deployments → "..." → Redeploy) so it picks up the corrected value.

This matters because `CLIENT_URL` is what the backend's CORS policy (`cors({ origin: clientUrl, credentials: true })` in `app.js`) uses to decide which frontend origin is allowed to call it with credentials — if it's wrong, every API call from your real frontend will be silently blocked by the browser.

---

## Step 5: End-to-end test

1. Open the frontend's real URL in a browser.
2. Confirm the homepage loads and shows real products (proves the frontend can reach the backend and the backend can reach Atlas).
3. Sign in as the seeded admin (or register a new account).
4. **The specific thing this session's code changes were for:** after signing in, refresh the page. If you're still signed in after the refresh, the cross-site refresh-token cookie is working correctly. If you get logged out on refresh, see Troubleshooting.
5. Visit `/admin` and confirm the dashboard loads with real data.

---

## Troubleshooting

**`/api/health` returns a Vercel error page (not JSON) in Step 2.** Check the deployment's Function Logs (Vercel project → Deployments → the deployment → Functions) for the actual error — most likely a missing/malformed `MONGODB_URI` (typo'd password, or forgot to add the database name before the `?`).

**Login works, but you're signed out after refreshing the page (Step 5).** This is exactly the cross-site cookie issue this session's changes targeted — check:
- `CLIENT_URL` on the backend project exactly matches the frontend's real URL (no trailing slash, correct `https://`).
- Both projects are actually being served over `https://` (Vercel does this automatically — you shouldn't need to do anything, but confirm neither URL is `http://`).
- Open the browser's DevTools → Application → Cookies for the backend's domain, after logging in — you should see a `refreshToken`-style cookie with `SameSite=None` and `Secure` set. If it's missing entirely, double check `NODE_ENV=production` is actually set on the backend project (that's what flips `sameSite` to `"none"` in `tokens.js`).

**CORS error in the browser console ("blocked by CORS policy").** Same root cause as above — `CLIENT_URL` on the backend doesn't match the frontend's actual URL. Fix and redeploy the backend (Step 4).

**Images don't load / broken image icons.** Unrelated to this deployment — check the Cloudinary setup steps from Session 12's notes (account created, keys added, `npm install` run) if you haven't finished those yet; until then, image URLs just save as typed and depend on the original source staying up.

**A future code change needs redeploying.** Push to GitHub (`git push`) — both Vercel projects are connected to the same repo and will auto-redeploy on push, picking up changes under their own Root Directory (`client/` changes redeploy the frontend, `server/` changes redeploy the backend; a change to a file outside both won't trigger either).

---

## Custom domain (optional, later)

Once everything above works on the `*.vercel.app` URLs, you can point a real domain (e.g. `zyvron.com`) at either project from that project's Settings → Domains — a common pattern is `zyvron.com` for the frontend and `api.zyvron.com` for the backend. If you want help with this once you're ready, just ask — it's a DNS-record step at your domain registrar plus a setting in Vercel, not a code change.
