const app = require("./app");
const connectDB = require("./config/db");
const { port } = require("./config/env");

connectDB();

app.listen(port, () => {
  console.log(`[server] Zyvron API listening on port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.error("[unhandledRejection]", err);
});
