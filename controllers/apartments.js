const express = require('express')
const router = express.Router()
const Apartment = require('../models/Apartment')
const mlr = require('../models/MLR')
const estimateController = require('./estimates')

router.use('/estimates', estimateController)

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
