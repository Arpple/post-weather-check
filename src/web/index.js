const express = require('express')
const handlebars = require('express-handlebars')

const app = express()
app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

const router = require('./router')
app.use(router)

app.use((err, req, res, next) => {
  console.log(err.stack)
  res.status(500).send('Oops!')
})

app.listen(3000, () => {
	console.log('server started at http://localhost:3000')
})
