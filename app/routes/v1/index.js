const express = require('express')

const FeedbackRouter = require('./feedback/index')
const AuthRouter = require('./auth/index')
const routers = [
    AuthRouter,
    FeedbackRouter
]

const router = express.Router()

router.use('/v1', ...routers)

module.exports = router