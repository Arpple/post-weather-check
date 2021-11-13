const capitalize = (string) => {
  const first = string.slice(0, 1)
  const tail = string.slice(1)

  return first.toUpperCase() + tail
}

module.exports = { capitalize }
