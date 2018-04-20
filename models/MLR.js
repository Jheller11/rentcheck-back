const MLR = require('ml-regression-multivariate-linear')
const data = require('../db/seeds.json')

let x = []
let y = []

data.map(apt => {
  x.push([apt.bedrooms, apt.baths - 1, apt.size, apt.parking, apt.neighborhood])
  y.push([apt.rent])
})

const mlr = new MLR(x, y)
console.log(mlr.weights)

module.exports = mlr

// Number bedrooms
// square feet
// parking
// neighborhood {ten?  1-10 rating based on desirability}
// new  { 1= yes, 0 = no}
