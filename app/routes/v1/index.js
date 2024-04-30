const express = require('express')
const feedbackRouter = require('./feedback/index')

const router = express.Router()
router.use(feedbackRouter)

module.exports = router