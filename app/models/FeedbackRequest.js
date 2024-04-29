const mongoose = require('mongoose')

const Schema = mongoose.Schema

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const validateEmail = email => {
    return EMAIL_REGEX.test(email)
};

const FeedbackRequest = new Schema({
    name: String,
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Необходимо ввести почту',
        validate: [validateEmail, 'Введите название почту в правильном формате'],
        match: [EMAIL_REGEX, 'Please fill a valid email address']
    },
    theme: String,
    message: String
})

module.exports = mongoose.model('FeedbackFequest', FeedbackRequest)