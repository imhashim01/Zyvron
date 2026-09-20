const express = require("express");
const categories = require("../controllers/categoryController");
const { protect, requireAdmin } = require("../middleware/auth");

const router = express.Router();

router.get("/", categories.list);
router.post("/", protect, requireAdmin, categories.create);
router.put("/:id", protect, requireAdmin, categories.update);
router.delete("/:id", protect, requireAdmin, categories.remove);

module.exports = router;
