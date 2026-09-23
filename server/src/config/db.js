const mongoose = require("mongoose");
const { mongoUri, nodeEnv } = require("./env");

const MAX_ATTEMPTS = 5;
const BASE_DELAY_MS = 1000;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Connects to MongoDB with exponential-backoff retries. If every attempt fails, the process exits
 * instead of letting the API come up "alive" while every DB-backed route silently fails - the old
 * behavior masked outages instead of surfacing them.
 *
 * Also serverless-safe: on Vercel this module is reused across warm
 * invocations of the same function instance, so the readyState guard below
 * makes every call after the first a no-op (readyState 1 = connected,
 * 2 = an earlier call's connect is still in flight) instead of opening a
 * fresh connection per request.
 */
async function connectDB() {
  if (mongoose.connection.readyState === 1 || mongoose.connection.readyState === 2) return;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    try {
      await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 8000 });
      console.log(`[db] MongoDB connected -> ${mongoose.connection.name}`);
      return;
    } catch (err) {
      console.error(`[db] MongoDB connection attempt ${attempt}/${MAX_ATTEMPTS} failed: ${err.message}`);
      if (attempt === MAX_ATTEMPTS) {
        // On a traditional always-on process (local dev, or a host like
        // Render/Railway) a DB outage should stop the process so the
        // failure is loud instead of quietly serving broken requests. On
        // Vercel there is no long-lived process to "stay up" - each request
        // is its own invocation - so exiting here would just crash this one
        // invocation for no benefit; throwing instead lets the request that
        // triggered this connect fail with a normal 500, and the next
        // request gets a fresh attempt.
        if (nodeEnv !== "test" && !process.env.VERCEL) {
          console.error("[db] Giving up after max retries. Exiting so the failure is visible instead of serving broken requests.");
          process.exit(1);
        }
        throw err;
      }
      await delay(BASE_DELAY_MS * 2 ** (attempt - 1));
    }
  }
}

mongoose.connection.on("disconnected", () => {
  console.warn("[db] MongoDB disconnected");
});

module.exports = connectDB;
