import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import DateDetails from './DateDetails';
import { findByTestAttr } from '../../testUtils';
import { datesProp, studentsProp, roomsProp } from '../../testUtils/mockData';

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

describe('DateDetails component', () => {
  test('should render without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-date-details')
    expect(component.length).toBe(1);
  });

  test('should render `loading` if not yet received date, room, students props', () => {
    const props = {
      room: null,
      date: null,
      students: []
    }
    const wrapper = setup(props);
    const loading = findByTestAttr(wrapper, 'loading');
    expect(loading.length).toBe(1);
  })

  test('should render desks', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'desk-item');
    expect(component.length).not.toBe(0);
  });

  test('should render absent students', () => {
    const wrapper = setup();
    const absentStudents = findByTestAttr(wrapper, 'absent-student');
    expect(absentStudents.length).not.toBe(0);
  });

  test('should not render absent students if no students were absent', () => {
    const wrapper = setup({ date: datesProp[1] });
    const absentStudents = findByTestAttr(wrapper, 'absent-student');
    expect(absentStudents.length).toBe(0);
  })

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

      test('should not run if `students` prop is not empty', () => {
        const loadStudentsMock = jest.fn();
        const props = { loadStudents: loadStudentsMock };

        const wrapper = setupMount(props);

        const loadStudentsCallCount = loadStudentsMock.mock.calls.length;
        expect(loadStudentsCallCount).toBe(0);
        wrapper.unmount();
      });
    });

    describe('loadDates', () => {
      test('should run if `date` prop is null', () => {
        const loadDatesMock = jest.fn();
        const props = { date: null, loadDates: loadDatesMock };

        const wrapper = setupMount(props);

        const loadDatesCallCount = loadDatesMock.mock.calls.length;
        expect(loadDatesCallCount).toBe(1);
        wrapper.unmount();
      });

      test('should not run if `date` prop is not null', () => {
        const loadDatesMock = jest.fn();
        const props = { loadDates: loadDatesMock };

        const wrapper = setupMount(props);

        const loadDatesCallCount = loadDatesMock.mock.calls.length;
        expect(loadDatesCallCount).toBe(0);
        wrapper.unmount();
      });
    });
  });
});
