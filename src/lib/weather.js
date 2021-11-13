const got = require('got')
const api = require('./api')

const get = (lat, long) => {
  const request = api.createRequest(lat, long)
  const { body } = await got.get(request.url, request.options)
  return api.fromResponse(body)
}

module.exports = { get }
