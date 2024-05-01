const mongoose = require('mongoose')
const { MODEL } = require('./consts')

const Schema = mongoose.Schema

const FitnessCourseCycleStep = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true,
        min: 0
    }
})

const FitnessCourse = new Schema({
    title: {
        type: String,
        required: 'Необходимо ввести название курса'
    },
    description: {
        type: String,
        required: 'Необходимо ввести описание курса'
    },
    topic: {
        type: String,
        required: 'Необходимо выбрать категорию'
    },
    cycles_amount: Number,
    cycle_steps: [FitnessCourseCycleStep],
    level: {
        type: Number,
        min: 0,
        max: 2
    },
})

module.exports = mongoose.model(MODEL.FITNESS_COURSE, FitnessCourse)