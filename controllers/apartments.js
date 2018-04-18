const express = require('express')
const router = express.Router()
const Apartment = require('../models/Apartment')
const Estimate = require('../models/Estimate')
const mlr = require('../models/MLR')

router.get('/estimate/:id', (req, res) => {
  Estimate.find({ _id: req.params.id }).then(est => {
    res.json(est)
  })
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

router.get('/mlr', (req, res) => {
  res.json(mlr)
})

router.get('/', (req, res) => {
  Apartment.find({}).then(apts => res.json(apts))
})

router.post('/', (req, res) => {
  Apartment.create(req.body).then(apts => res.json(apts))
})

router.delete('/:id', (req, res) => {
  Apartment.findOneAndRemove({ _id: req.params.id }).then(() => {
    Apartment.find({}).then(apts => res.json(apts))
  })
})

module.exports = router
