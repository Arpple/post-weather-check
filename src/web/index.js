const express = require('express')
const handlebars = require('express-handlebars')

const app = express()
require('express-async-errors')
app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

const router = require('./router')
app.use(router)

app.use((err, req, res, next) => {
  console.log(err)
	res.render('error', { error: err })
})

app.listen(3000, () => {
	console.log('server started at http://localhost:3000')
})
