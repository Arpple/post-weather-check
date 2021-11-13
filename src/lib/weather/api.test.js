const test = require('ava')
const api = require('./api')

const response = {
  "generationtime_ms": 0.5779266357421875,
  "utc_offset_seconds": 32400,
  "latitude": 35.75,
  "daily": {
    "temperature_2m_min": [
      9.5,
      8.3,
      10.1,
      10,
      9.9,
      9.9,
      8.5
    ],
    "time": [
      "2021-11-14",
      "2021-11-15",
      "2021-11-16",
      "2021-11-17",
      "2021-11-18",
      "2021-11-19",
      "2021-11-20"
    ],
    "temperature_2m_max": [
      17,
      19.4,
      16.6,
      17.7,
      16,
      19.4,
      17
    ],
    "weathercode": [
      61,
      1,
      3,
      3,
      61,
      3,
      3
    ],
  },
  "elevation": 12.7109375,
  "daily_units": {
    "temperature_2m_min": "°C",
    "time": "iso8601",
    "temperature_2m_max": "°C"
  },
  "longitude": 139.75
}

test('read api response', (t) => {
  const weathers = api.fromResponse(response)
  t.deepEqual(weathers, [
    {
      date: '2021-11-14',
      maxTemp: 17,
      minTemp: 9.5,
      weather: 'rain',
    },
    {
      date: '2021-11-15',
      maxTemp: 19.4,
      minTemp: 8.3,
      weather: 'clear',
    },
    {
      date: '2021-11-16',
      maxTemp: 16.6,
      minTemp: 10.1,
      weather: 'clear'
    }
  ])
})
