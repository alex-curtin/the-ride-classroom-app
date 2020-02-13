import moxios from 'moxios';

import { getStudents, getDates, getRooms, getDesks } from './api-helper';

describe('API calls', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('getStudents should return data', async () => {
    const data = [{ name: 'Aisling' }, { name: 'Sommer' }];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: data
      })
    });

    const res = await getStudents();
    expect(res).toEqual(data);
  });

  test('getDates should return data', async () => {
    const data = [{ date: 1577854800000 }, { date: 1577941200000 }];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: data
      })
    });

    const res = await getDates();
    expect(res).toEqual(data);
  });

  test('getRooms should return data', async () => {
    const data = [{ roomId: "6490847d-a3db-44ba-90eb-8832bf938e69" }];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: data
      })
    });

    const res = await getRooms();
    expect(res).toEqual(data);
  });

  test('getDesks should return data', async () => {
    const data = [{ id: "3a950cd7-f347-4c17-8409-3fcc5459b13c" }];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: data
      })
    });

    const res = await getDesks();
    expect(res).toEqual(data);
  });
})


