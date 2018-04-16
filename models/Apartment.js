const mongoose = require('../db/connection')

const ApartmentSchema = new mongoose.Schema({
  bedrooms: {
    type: Number,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  baths: {
    type: Number,
    required: true
  },
  parking: {
    type: Number,
    default: 0,
    required: true
  },
  neighborhood: {
    type: Number,
    required: true
  },
  address: '',
  created: {
    type: Date,
    default: Date.now()
  }
})

const Apartment = mongoose.model('Apartment', ApartmentSchema)

module.exports = Apartment