const mongoose = require('mongoose')
mongoose.Promise = Promise

mongoose.connect('mongodb://localhost/rents')

module.exports = mongoose
