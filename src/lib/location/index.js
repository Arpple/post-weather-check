const got = require('got')
const config = require('../../config')
const api = require('./api')

const get = async (postCode) => {
  const user = config.geoNamesApi.username
  const request = api.createRequest(postCode, user)
  const { body } = await got.get(request.url, request.options)
  return api.fromResponse(JSON.parse(body))
}

module.exports = { get }
