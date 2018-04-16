const express = require('express')
const router = express.Router()
const Apartment = require('../models/Apartment')

router.get('/', (req, res) => {
  Apartment.find({}).then(apts => res.json(apts))
})

module.exports = router
