const mongoose = require('./connection')
const seeds = require('/seeds.json')

const Apartment = require('../models/Apartment')

Apartment.remove({}).then(apt => {
  Apartment.collection.insert(seeds).then(apts => {
    console.log(apts)
    mongoose.connection.close()
  })
})
