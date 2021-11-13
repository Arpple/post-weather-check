const string = require('../../lib/string')

const weatherLabelTable = {
  clear: 'sunny',
  fog: 'foggy',
  drizzle: 'rainy',
  rain: 'rainy',
  snow: 'snowy',
  thunderstorm: 'stormy',
}

const weatherIconTable = {
  sunny: 'fa-sun',
  foggy: 'fa-smog',
  rainy: 'fa-cloud-rain',
  snowy: 'fa-snowflake',
  storymy: 'fa-poo-storm',
}

const weekday = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
]

const weatherView = (data) => {
  const label = weatherLabelTable[data.weather]
  const day = weekday[(new Date(data.date)).getDay()]

  return {
    date: data.date,
    maxTemp: data.maxTemp,
    minTemp: data.minTemp,
    label: string.capitalize(label),
    icon: weatherIconTable[label],
    day,
  }
}

module.exports = { weatherView }
