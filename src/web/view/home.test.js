const test = require('ava')
const home = require('./home')

test('render weather', (t) => {
  const weather = {
    date: '2021-11-14',
    maxTemp: 17,
    minTemp: 9,
    weather: 'rain',
  }

  const view = home.weatherView(weather)

  t.deepEqual(view, {
    date: '2021-11-14',
    day: 'Sun',
    icon: 'fa-cloud-rain',
    label: 'Rainy',
    maxTemp: 17,
    minTemp: 9,
  })
})
