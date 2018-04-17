const mongoose = require('../db/connection')

const EstimateSchema = new mongoose.Schema({
  type: String,
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
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now()
  },
  rent: {
    type: Number,
    default: 0
  }
})

const Estimate = mongoose.model('Estimate', EstimateSchema)

module.exports = Estimate
