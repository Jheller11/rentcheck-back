const express = require('express')
const router = express.Router()
const Question = require('../models/Question')

router.get('/', (req, res) => {
  Question.find({}).then(ques => res.json(ques))
})

router.post('/', (req, res) => {
  Question.create(req.body).then(() =>
    Question.find({}).then(ques => res.json(ques))
  )
})

module.exports = router
