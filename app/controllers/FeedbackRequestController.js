const FeedbackRequest = require('../models/FeedbackRequest')

module.exports.createFeedbackRequest = async (req, res) => {
    try {
        const feedbackRequest = new FeedbackRequest({
            name: req.body.name,
            email: req.body.email,
            topic: req.body.topic,
            message: req.body.message,
        })
        const result = await feedbackRequest.save()
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}
