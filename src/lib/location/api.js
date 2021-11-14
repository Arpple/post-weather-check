const got = require('got')

const createRequest = (postCode, user) => {
  return {
    url: 'http://api.geonames.org/postalCodeSearch',
    options: {
      searchParams: {
        postalcode: encodeURIComponent(postCode),
        username: user
      },
      headers: {
        Accept: 'application/json',
      },
    },
  }
}

const fromResponse = (body) => {
  const codes = body.postalCodes

  // 0 = no matching, >1 = not exactly match
  if (codes.length !== 1) {
    return null
  }

  const code = codes[0]
  return {
    name: `${code.adminName1}, ${code.adminName2}, ${code.placeName}`,
    latitude: code.lat,
    longtitude: code.lng,
  }
}


module.exports = { createRequest, fromResponse }
