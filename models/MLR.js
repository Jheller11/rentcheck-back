const MLR = require('ml-regression-multivariate-linear')

const x = [
  [0, 500, 0, 8, 1],
  [1, 600, 1, 10, 1],
  [1, 800, 1, 9, 0],
  [1, 950, 0, 5, 0],
  [2, 1200, 1, 8, 0],
  [2, 1100, 1, 6, 1],
  [0, 600, 0, 7, 0]
]
const y = [[990], [1750], [1670], [1600], [2540], [2630], [810]]

const mlr = new MLR(x, y)

module.exports = mlr

// Number bedrooms
// square feet
// parking
// neighborhood {ten?  1-10 rating based on desirability}
// new  { 1= yes, 0 = no}
