const axios = require('axios')

const getDataFromExternalApi = async () => {
  const result = await axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error)
    })
  return result
}

module.exports = {
  getDataFromExternalApi,
}
