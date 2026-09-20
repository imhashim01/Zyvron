const Order = require("../models/Order");

function randomOrderNumber() {
  return "TP-" + Math.floor(100000 + Math.random() * 900000);
}

/** Generates a TP-XXXXXX order number, retrying on collision against the DB. */
async function generateOrderNumber() {
  for (let attempt = 0; attempt < 10; attempt += 1) {
    const candidate = randomOrderNumber();
    // eslint-disable-next-line no-await-in-loop
    const exists = await Order.exists({ orderNumber: candidate });
    if (!exists) return candidate;
  }
  throw new Error("Could not generate a unique order number after 10 attempts");
}

module.exports = { generateOrderNumber };
