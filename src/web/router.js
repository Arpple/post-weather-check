const router = require('express').Router()

const location = require('../lib/location')
const weather = require('../lib/weather')

router.get('/', (req, res) => {
	res.render('home')
})

router.post('/', async (req, res) => {
	const { postCode } = req.body
  const loc = await location.get(postCode)
  const weathers = await weather.get(loc.latitude, loc.longtitude)

	res.render('home', {
    location: loc.name,
    weathers,
  })
})

module.exports = router
