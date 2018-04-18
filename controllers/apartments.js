const express = require('express')
const router = express.Router()
const Apartment = require('../models/Apartment')
const Estimate = require('../models/Estimate')
const mlr = require('../models/MLR')

router.get('/estimate/:id', (req, res) => {
  Estimate.find({ _id: req.params.id }).then(est => res.json(est))
})

router.get('/', (req, res) => {
  Apartment.find({}).then(apts => res.json(apts))
})

router.get('/estimate', (req, res) => {
  res.send('')
})

router.post('/estimate', (req, res) => {
  let rentArray = mlr.predict([
    parseInt(req.body.bedrooms),
    parseInt(req.body.baths),
    parseInt(req.body.size),
    parseInt(req.body.parking),
    parseInt(req.body.neighborhood)
  ])
  let rent = rentArray[0]
  let estimate = Object.assign({}, req.body, { rent: rent })
  Estimate.create(estimate)
    .then(estimate => {
      res.json(estimate._id)
    })
    .catch(err => console.log(err))
})

module.exports = router
