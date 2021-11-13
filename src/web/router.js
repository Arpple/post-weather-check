const router = require('express').Router()

const location = require('../lib/location')

router.get('/', (req, res) => {
	res.render('home')
})

router.post('/', async (req, res) => {
	const { postCode } = req.body
  const loc = await location.get(postCode)

	res.render('home', {
    location: loc.name,
  })
})

module.exports = router
