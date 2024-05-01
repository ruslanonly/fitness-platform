const mongoose = require('mongoose')
const { MODEL } = require('./consts')

const Schema = mongoose.Schema

const Rating = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: 'Необходимо ввести id отправителя отзыва'
    },
    course: {
        type: Schema.Types.ObjectId,
        required: 'Необходимо ввести id курса'
    },
    estimation: {
        type: Number,
        required: 'Необходимо указать имя отправителя'
    },
    advantages: String,
    disadvantages: String
})

module.exports = mongoose.model(MODEL.RATING, Rating)