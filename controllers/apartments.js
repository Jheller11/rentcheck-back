const express = require('express')
const router = express.Router()
const Apartment = require('../models/Apartment')
const Estimate = require('../models/Estimate')
const mlr = require('../models/MLR')

router.get('/estimates/:id', (req, res) => {
  Estimate.find({ _id: req.params.id }).then(est => res.json(est))
})

router.get('/', (req, res) => {
  Apartment.find({}).then(apts => res.json(apts))
})

router.post('/estimates', (req, res) => {
  Estimate.create(req.body)
    .then(estimate => {
      res.json(estimate._id)
    })
    .catch(err => console.log(err))
})

module.exports = router
