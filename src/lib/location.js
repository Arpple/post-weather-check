const got = require('got')
const config = require('../config')

const get = async (postCode) => {
  const { body } = await got
    .get('http://api.geonames.org/postalCodeSearch', {
      searchParams: {
        postalcode: encodeURIComponent(postCode),
        username: config.geoNamesApi.username
      },
      headers: {
        Accept: "application/json"
      }
    })

  const code = JSON.parse(body).postalCodes[0]
  return `${code.adminName1}, ${code.adminName2}, ${code.placeName}`
}

module.exports = { get }
