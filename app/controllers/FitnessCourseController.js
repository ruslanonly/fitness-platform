const FitnessCourse = require("../models/FitnessCourse")

module.exports.createFitnessCourse = async (req, res) => {
    try {
        const feedbackRequest = new FitnessCourse({
            
        })
        const result = await feedbackRequest.save()
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}
