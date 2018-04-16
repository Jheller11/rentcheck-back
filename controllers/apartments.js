const express = require('express')
const router = express.Router()
const Apartment = require('../models/Apartment')
const mlr = require('../models/MLR')

router.get('/', (req, res) => {
  Apartment.find({}).then(apts => res.json(apts))
})

router.post('/', (req, res) => {
  Apartment.create(req.body).then(() =>
    console.log(mlr.predict([1, 750, 1, 7, 0]))
  )
})

module.exports = router
