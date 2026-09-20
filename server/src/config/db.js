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
 */
async function connectDB() {
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    try {
      await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 8000 });
      console.log(`[db] MongoDB connected -> ${mongoose.connection.name}`);
      return;
    } catch (err) {
      console.error(`[db] MongoDB connection attempt ${attempt}/${MAX_ATTEMPTS} failed: ${err.message}`);
      if (attempt === MAX_ATTEMPTS) {
        console.error("[db] Giving up after max retries. Exiting so the failure is visible instead of serving broken requests.");
        if (nodeEnv !== "test") process.exit(1);
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
