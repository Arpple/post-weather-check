const got = require('got')
const api = require('./api')

const get = async (lat, long) => {
  const request = api.createRequest(lat, long)
  const { body } = await got.get('https://api.open-meteo.com/v1/forecast?latitude=35.69325396853611&longitude=139.7089711897028&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo')
  return api.fromResponse(JSON.parse(body))
}

module.exports = { get }
