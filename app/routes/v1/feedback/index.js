const express = require('express')
const router = express.Router();

const FeedbackRequestController = require('../../../controllers/FeedbackRequestController')

router.post('/feedback', FeedbackRequestController.createFeedbackRequest)

module.exports = router