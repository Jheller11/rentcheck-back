const mongoose = require('./connection')
const seeds = require('./seeds.json')
mongoose.Promise = Promise

const Apartment = require('../models/Apartment')

Apartment.remove({}).then(apt => {
  Apartment.collection.insert(seeds).then(apts => {
    console.log(apts)
    mongoose.connection.close()
  })
})

// this file is used to load seeds.json into the MLR to create a new model.
