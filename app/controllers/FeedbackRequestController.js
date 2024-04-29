const FeedbackRequest = require('../models/FeedbackRequest')

module.exports.createFeedbackRequest = async (req, res) => {
    const feedbackRequest = new FeedbackRequest({
        name: req.body.name,
        email: req.body.email,
        theme: req.body.theme,
        message: req.body.message,
    })

    const result = await feedbackRequest.save()
}
