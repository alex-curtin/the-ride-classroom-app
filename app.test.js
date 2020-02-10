const request = require('supertest');
const app = require('./app');

test('Test path should get response from GET request', async () => {
  const resp = await request(app).get('/test');
  expect(resp.statusCode).toBe(200);
});