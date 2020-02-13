const httpMocks = require('node-mocks-http');
const fs = require('fs');

let rawData = fs.readFileSync('./data/dailyData.json');
let dates = JSON.parse(rawData);
const { datesRouteHandler } = require('./dates');

describe('datesRouteHandler', () => {
  const req = httpMocks.createRequest({
    method: 'GET',
    url: '/'
  });
  const res = httpMocks.createResponse();

  test('should get all dates and return status 200', () => {
    datesRouteHandler(req, res);
    const data = res._getJSONData();

    expect(res.statusCode).toBe(200);
    expect(data).toEqual(dates);
  })
});