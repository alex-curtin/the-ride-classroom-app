const httpMocks = require('node-mocks-http');
const fs = require('fs');

let rawData = fs.readFileSync('./data/deskData.json');
let desks = JSON.parse(rawData);
const { desksRouteHandler } = require('./desks');

describe('desksRouteHandler', () => {
  const req = httpMocks.createRequest({
    method: 'GET',
    url: '/'
  });
  const res = httpMocks.createResponse();

  test('should get all desks and return status 200', () => {
    desksRouteHandler(req, res);
    const data = res._getJSONData();

    expect(res.statusCode).toBe(200);
    expect(data).toEqual(desks);
  });
});