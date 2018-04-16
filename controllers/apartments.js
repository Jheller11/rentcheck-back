const express = require('express')
const router = express.Router()
const Apartment = require('../models/Apartment')

router.get('/', (req, res) => {
  Apartment.find({}).then(teams => res.json(teams))
})

module.exports = router
