const express = require('express')
const router = express.Router();

const FeedbackRequestController = require('../../../controllers/FeedbackRequestController');
const { AuthMiddleware } = require('../../../middlewares/auth');

router.post('/feedback', AuthMiddleware, FeedbackRequestController.createFeedbackRequest)

module.exports = router