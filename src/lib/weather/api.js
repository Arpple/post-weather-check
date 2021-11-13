/**
 * Open Meteor Api
 * ref: https://open-meteo.com/en/docs#api_form
 */

const weatherCodeTable = {
  0: 'clear',
  1: 'clear', 2: 'clear', 3: 'clear',
  45: 'fog', 48: 'fog',
  51: 'drizzle', 53: 'drizzle', 55: 'drizzle',
  56: 'drizzle', 57: 'drizzle',
  61: 'rain', 63: 'rain', 65: 'rain',
  66: 'rain', 67: 'rain',
  71: 'snow', 73: 'snow', 75: 'snow',
  77: 'snow',
  80: 'rain', 81: 'rain', 82: 'rain',
  85: 'snow', 86: 'snow',
  95: 'thunderstorm',
  96: 'thunderstorm', 99: 'thunderstorm',
}

const timezone = 'Asia/Tokyo'

const createRequest = (lat, long) => {
  return {
    url: `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=${encodeURIComponent(timezone)}`,
    options: {},
  }
}

const fromResponse = (body) => {
  const daily = body.daily
  return daily.time.slice(0, 3).map((date, i) => {
    return {
      date,
      maxTemp: daily.temperature_2m_max[i],
      minTemp: daily.temperature_2m_min[i],
      weather: weatherCodeTable[daily.weathercode[i]],
    }
  })
}

module.exports = { createRequest, fromResponse }
