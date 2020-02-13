const httpMocks = require('node-mocks-http');
const fs = require('fs');

let rawData = fs.readFileSync('./data/studentData.json');
let students = JSON.parse(rawData);
const { studentsRouteHandler } = require('./students');

describe('studentsRouteHandler', () => {
  const req = httpMocks.createRequest({
    method: 'GET',
    url: '/'
  });
  const res = httpMocks.createResponse();

  test('should get all students and return status 200', () => {
    studentsRouteHandler(req, res);
    const data = res._getJSONData();

    expect(res.statusCode).toBe(200);
    expect(data).toEqual(students);
  })
});