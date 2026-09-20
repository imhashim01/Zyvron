const mongoose = require("mongoose");
const { mongoUri } = require("./env");

async function connectDB() {
  try {
    await mongoose.connect(mongoUri);
    console.log(`[db] MongoDB connected -> ${mongoose.connection.name}`);
  } catch (err) {
    console.error("[db] MongoDB connection failed. The API will keep running, but any DB-backed route will fail until this is fixed.");
    console.error(`[db] ${err.message}`);
  }
}

mongoose.connection.on("disconnected", () => {
  console.warn("[db] MongoDB disconnected");
});

module.exports = connectDB;
