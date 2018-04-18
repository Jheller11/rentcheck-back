const app = require('express')()
const parser = require('body-parser')
const cors = require('cors')
const method = require('method-override')
const path = require('path')
const favicon = require('serve-favicon')
const apartmentContoller = require('./controllers/apartments')
const questionController = require('./controllers/questions')

app.use(cors())
app.use(parser.json())
app.use(method('_method'))
app.use(parser.urlencoded({ extended: true }))
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.use('/apartments', apartmentContoller)
app.use('/questions', questionController)

app.get('/', (req, res) => res.send('Welcome'))

app.listen(3001, () => console.log('server running: 3001'))
