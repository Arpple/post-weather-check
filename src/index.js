const express = require('express')
const handlebars = require('express-handlebars')

const app = express()

app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true }))

const view = require('./view')

app.get('/', (req, res) => {
  res.render('home')
})

app.post('/', (req, res) => {
  const postCode = req.body
  res.render('home')
})

app.listen(3000, () => {
	console.log('server started at http://localhost:3000')
})
