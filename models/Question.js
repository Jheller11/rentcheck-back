const mongoose = require('../db/connection')

const QuestionSchema = new mongoose.Schema({
  question: String,
  answer: String
})

const Question = mongoose.model('Question', QuestionSchema)

module.exports = Question
