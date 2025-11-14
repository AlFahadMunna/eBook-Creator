const express = require("express");
const router = express.Router();
const {
  generateOutline,
  generateChapterContent,
} = require("../controllers/aiController");
const { protect } = require("../middleware/authMiddleware");
const { route } = require("./authRoutes");

// Apply protect middleware to all routes
router.use(protect);

router.post("/generate-outline", generateOutline);
router.post("/generate-chapter-content", generateChapterContent);

module.exports = router;
