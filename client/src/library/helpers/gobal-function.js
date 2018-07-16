function fetchListOfPlayer (obj) {
  const data = []
  for (let key in obj) {
    const i = obj[key]
    i.id = key
    data.push(i)
  }
  return data
}
export default {
  fetchListOfScope (obj) {
    const data = []
    for (let key in obj) {
      const i = obj[key]
      i.id = key
      i.listOfPlayer = fetchListOfPlayer(i.listOfPlayer)
      data.push(i)
    }
    return data
  }
}
