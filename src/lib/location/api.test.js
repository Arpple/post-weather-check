const test = require('ava')
const api = require('./api')

test('create api request', (t) => {
  const postCode = '123'
  const user = 'user'
  const request = api.createRequest(postCode, user)

  t.is(request.url, 'http://api.geonames.org/postalCodeSearch')

  t.deepEqual(request.options, {
    searchParams: {
      postalcode: '123',
      username: 'user'
    },
    headers: {
      Accept: 'application/json'
    }
  })
})

const response = {
  "postalCodes": [
    {
      "adminCode2": "1852083",
      "adminCode1": "40",
      "adminName2": "Shinjuku Ku",
      "lng": 139,
      "countryCode": "JP",
      "postalCode": "160-0022",
      "adminName1": "Tokyo To",
      "placeName": "Shinjuku",
      "lat": 35,
    }
  ]
}

test('read api response', (t) => {
  const location = api.fromResponse(response)
  t.is(location.name, 'Tokyo To, Shinjuku Ku, Shinjuku')
  t.is(location.latitude, 35)
  t.is(location.longtitude, 139)
})
