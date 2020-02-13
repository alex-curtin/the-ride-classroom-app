const httpMocks = require('node-mocks-http');
const fs = require('fs');

let rawData = fs.readFileSync('./data/roomData.json');
let rooms = JSON.parse(rawData);
const { roomsRouteHandler } = require('./rooms');

describe('roomsRouteHandler', () => {
  const req = httpMocks.createRequest({
    method: 'GET',
    url: '/'
  });
  const res = httpMocks.createResponse();

  test('should get all desks and return status 200', () => {
    roomsRouteHandler(req, res);
    const data = res._getJSONData();

    expect(res.statusCode).toBe(200);
    expect(data).toEqual(rooms);
  });
});