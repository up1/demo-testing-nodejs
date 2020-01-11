const request = require('supertest')
const app = require('../server')

describe('Users Endpoints', () => {
  it('should get all user', async () => {
    const res = await request(app).get('/api/users')

    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('users')
    expect(res.body.users).toHaveLength(2)
  })

  it('should get user by id', async () => {
    const res = await request(app).get('/api/users/1')

    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('user')
    expect(res.body).toHaveProperty('user.id')
    expect(res.body.user.id).toEqual('1')
    expect(res.body.user.name).toEqual('user 1')
  })
})
