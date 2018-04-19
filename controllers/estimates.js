const express = require('express')
const router = express.Router()
const mlr = require('../models/MLR')
const Estimate = require('../models/Estimate')

router.get('/:id', (req, res) => {
  Estimate.find({ _id: req.params.id }).then(est => {
    res.json(est)
  })
})

router.get('/', (req, res) => {
  Estimate.find({}).then(ests => res.json(ests))
})

router.post('/', (req, res) => {
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

router.delete('/:id', (req, res) => {
  Estimate.findOneAndRemove({ _id: req.params.id }).then(() => {
    Estimate.find({}).then(ests => res.json(ests))
  })
})

module.exports = router
