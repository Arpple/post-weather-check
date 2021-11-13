const got = require('got')

const get = (lat, long) => {
  const { body } = await got
      .get(`https://api.weather.gov/points/${lat},${long}`)
}

module.exports = { get }
