import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import moxios from 'moxios';

import App from './App';
import { findByTestAttr } from './testUtils.js';

/**
 * Creates a ShallowWrapper for App component
 * @param {object} state - State for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (state = {}) => {
  const wrapper = shallow(<App />);
  wrapper.setState(state);
  return wrapper;
}

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});

describe('test API call functions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('loadStudents should update `students` state', async () => {
    const data = [{ name: 'Aisling' }, { name: 'Sommer' }];
    const wrapper = setup();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: data
      })
    })

    await wrapper.instance().loadStudents();

    const newStudentsState = wrapper.instance().state.students;
    expect(newStudentsState).toEqual(data);
    moxios.uninstall();
  });

  test('loadDates should update `dates` state', async () => {
    const data = [{ date: 1577854800000 }, { date: 1577941200000 }];
    const wrapper = setup();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: data
      })
    })

    await wrapper.instance().loadDates();

    const newDatesState = wrapper.instance().state.dates;
    expect(newDatesState).toEqual(data);
  });

  test('loadDesks should update `desks` state', async () => {
    const data = [
      { id: "3a950cd7-f347-4c17-8409-3fcc5459b13c" },
      { id: "7fd34fbf-fee9-4754-8ac9-15183394c705" }
    ];
    const wrapper = setup();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: data
      });
    });

    await wrapper.instance().loadDesks();

    const newDesksState = wrapper.instance().state.desks;
    expect(newDesksState).toEqual(data);
  });

  test('loadRooms should update `rooms` state', async () => {
    const data = [{ roomId: "6490847d-a3db-44ba-90eb-8832bf938e69" }];
    const wrapper = setup();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: data
      });
    });
    await wrapper.instance().loadRooms();

    const newRoomsState = wrapper.instance().state.rooms;
    expect(newRoomsState).toEqual(data);
  })
});

test('toggleUser updates `user` state', () => {
  const wrapper = setup({ user: 'custodian' });
  wrapper.instance().toggleUser();
  const newUserState = wrapper.instance().state.user;
  expect(newUserState).toBe('teacher');
})