const router = require('express').Router()

const location = require('../lib/location')
const weather = require('../lib/weather')
const config = require('../config')
const home = require('./view/home')

router.get('/', (req, res) => {
	res.render('home')
})

const testLocation = {
  name: 'Tokyo',
  latitude: 35.69325,
  longtitude: 139.70897,
}

router.post('/', async (req, res) => {
	const { postCode } = req.body
  const loc = await location.get(postCode)

  if (loc === null) {
    return res.render('home', { postCode, locationNotFound: true })
  }

  const weathers = await weather.get(loc.latitude, loc.longtitude)

	return res.render('home', {
    postCode,
    location: loc,
    weathers: weathers.map(home.weatherView),
  })
})

module.exports = router
