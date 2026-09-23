// Vercel serverless entry point.
//
// Vercel doesn't run `server.js`'s app.listen(...) - there's no long-lived
// process to listen on a port. Instead, every request to this project is
// routed (via the rewrite in vercel.json) to this file, and Vercel calls the
// function it exports with (req, res), exactly like a raw Node http handler.
// Express's `app` object already *is* a valid (req, res) => {} handler, so
// re-exporting it here is enough to run the whole API - all the routes
// mounted in src/app.js keep working unmodified, because Vercel preserves
// the original req.url (e.g. "/api/products") and Express's own router
// matches against that.
//
// The one thing that must happen before any request is handled is the
// database connection. connectDB() is safe to call on every invocation
// (see src/config/db.js - it no-ops once connected/connecting), but calling
// it and awaiting a *fresh* promise per request would serialize cold starts
// behind an unnecessary await chain. Instead the in-flight promise is cached
// at module scope: on a warm Lambda instance (the common case - Vercel
// reuses instances across nearby requests) this module isn't re-evaluated,
// so `dbReady` already resolved and every request after the first just
// awaits an already-settled promise. If the connection attempt fails, the
// cached promise is replaced so the next request gets a fresh attempt
// instead of every future request rejecting forever against one bad promise.
const app = require("../src/app");
const connectDB = require("../src/config/db");

let dbReady = connectDB();

module.exports = async function handler(req, res) {
  try {
    await dbReady;
  } catch (err) {
    dbReady = connectDB();
    res.status(503).json({ message: "Database unavailable, please retry" });
    return;
  }
  return app(req, res);
};
