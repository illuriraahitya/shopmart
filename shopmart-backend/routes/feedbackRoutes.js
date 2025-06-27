const express = require('express');
const router = express.Router();
const { createFeedback, getAllFeedbacks } = require('../controllers/feedbackController');
const { protect, isAdmin } = require('../middleware/authMiddleware');

router.post('/', protect, createFeedback);
router.get('/', protect, isAdmin, getAllFeedbacks);

module.exports = router;
