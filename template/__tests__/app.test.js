// app.test.js
const request = require('supertest');
const { app, server } = require('../index');

describe('GET /api/hello', () => {
  afterAll((done) => {
    server.close(done); // テスト終了後にサーバーを閉じる
  });
  it('should return a hello message', async () => {
    const response = await request(app).get('/api/hello');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Hello, world!');
  });
});
