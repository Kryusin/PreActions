// app.test.js
const request = require('supertest');
const app = require('../index');

describe('GET /api/hello', () => {
  it('should return a hello message', async () => {
    const response = await request(app).get('/api/hello');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Hello, world!');
  });
});
