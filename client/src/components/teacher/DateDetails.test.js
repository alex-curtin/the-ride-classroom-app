import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import DateDetails from './DateDetails';
import { findByTestAttr, datesProp, studentsProp, roomsProp } from '../../testUtils.js';

const defaultProps = {
  date: datesProp[0],
  students: studentsProp,
  room: roomsProp[0]
};

/**
 * Creates a ShallowWrapper for DateDetails component.
 * @param {object} props - props for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<DateDetails {...setupProps} />);
};

/**
 * Mounts component, for testing lifecycle methods.
 * @param {object} props - props for this setup.
 * @returns {ReactWrapper}
 */
const setupMount = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return mount(
    <Router>
      <DateDetails {...setupProps} />
    </Router>
  );
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-date-details')
  expect(component.length).toBe(1);
});

test('renders `loading` if not yet received date, room, students props', () => {
  const props = {
    room: null,
    date: null,
    students: []
  }
  const wrapper = setup(props);
  const loading = findByTestAttr(wrapper, 'loading');
  expect(loading.length).toBe(1);
})

test('renders desks', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'desk-item');
  expect(component.length).not.toBe(0);
});

test('renders absent students', () => {
  const wrapper = setup();
  const absentStudents = findByTestAttr(wrapper, 'absent-student');
  expect(absentStudents.length).not.toBe(0);
});

describe('load data functions', () => {
  describe('loadRooms', () => {

    test('should run if `room` prop is null', () => {
      const loadRoomsMock = jest.fn();
      const props = { room: null, loadRooms: loadRoomsMock };

      const wrapper = setupMount(props);

      const loadRoomsCallCount = loadRoomsMock.mock.calls.length;
      expect(loadRoomsCallCount).toBe(1);
      wrapper.unmount();
    });

    test('should not run if `room` props is not null', () => {
      const loadRoomsMock = jest.fn();
      const props = { loadRooms: loadRoomsMock };

      const wrapper = setupMount(props);

      const loadRoomsCallCount = loadRoomsMock.mock.calls.length;
      expect(loadRoomsCallCount).toBe(0);
      wrapper.unmount();
    });
  });

  describe('loadStudents', () => {
    test('should run if `students` prop is empty', () => {
      const loadStudentsMock = jest.fn();
      const props = { students: [], loadStudents: loadStudentsMock };

      const wrapper = setupMount(props);

      const loadStudentsCallCount = loadStudentsMock.mock.calls.length;
      expect(loadStudentsCallCount).toBe(1);
      wrapper.unmount();
    });

    test('should not run id `students` prop is not empty', () => {
      const loadStudentsMock = jest.fn();
      const props = { loadStudents: loadStudentsMock };

      const wrapper = setupMount(props);

      const loadStudentsCallCount = loadStudentsMock.mock.calls.length;
      expect(loadStudentsCallCount).toBe(0);
      wrapper.unmount();
    })
  });
})

