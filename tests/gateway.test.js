const gateway = require('../gateways')
const nock = require('nock')

describe('Gateways Test with nock', () => {
  it('try to call real api', async () => {
    const result = await gateway.getDataFromExternalApi()
    expect(result).toHaveProperty('explanation')
    expect(result.title).toEqual('Nacreous Clouds over Sweden')
  })

  it('try to mock api', async () => {
    nock('https://api.nasa.gov')
      .get('/planetary/apod?api_key=DEMO_KEY')
      .reply(200, { explanation: 'OK', title: 'Mock title' })

    const result = await gateway.getDataFromExternalApi()
    expect(result).toHaveProperty('explanation')
    expect(result.title).toEqual('Mock title')
  })
})
