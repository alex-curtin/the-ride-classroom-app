import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow, mount, ReactWrapper } from 'enzyme';

import DeskDetails from './DeskDetails';
import { findByTestAttr, desksProp, datesProp, studentsProp, roomsProp } from '../../testUtils.js';

const defaultProps = {
  dates: datesProp,
  students: studentsProp,
  room: roomsProp[0],
  desk: desksProp[0]
}

/**
 * Creates a ShallowWrapper for DeskDetails component
 * @param {object} props - props for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<DeskDetails {...setupProps} />);
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
      <DeskDetails {...setupProps} />
    </Router>);
};

describe('DeskDetails component', () => {
  test('should render without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-desk-details');
    expect(component.length).toBe(1);
  });

  test('should render loading if not yet received props', () => {
    const wrapper = setup({ dates: [], students: [], room: null, desk: null });
    const loading = findByTestAttr(wrapper, 'loading');
    expect(loading.length).toBe(1);
  });

  describe('methods to run on component mount', () => {
    describe('loadDesks', () => {
      test('should run if `desk` prop is null', () => {
        const loadDesksMock = jest.fn();
        const setupProps = { desk: null, loadDesks: loadDesksMock };

        const wrapper = setupMount(setupProps);

        const loadDesksCallCount = loadDesksMock.mock.calls.length;
        expect(loadDesksCallCount).toBe(1);
        wrapper.unmount();
      });

      test('should not run if `desk` prop is not null', () => {
        const loadDesksMock = jest.fn();
        const setupProps = { loadDesks: loadDesksMock };

        const wrapper = setupMount(setupProps);

        const loadDesksCallCount = loadDesksMock.mock.calls.length;
        expect(loadDesksCallCount).toBe(0);
        wrapper.unmount();
      });
    });

    describe('loadStudents', () => {
      test('should run if `students` prop is empty', () => {
        const loadStudentsMock = jest.fn();
        const setupProps = { students: [], loadStudents: loadStudentsMock };

        const wrapper = setupMount(setupProps);

        const loadStudentssCallCount = loadStudentsMock.mock.calls.length;
        expect(loadStudentssCallCount).toBe(1);
        wrapper.unmount();
      });

      test('should not run if `students` prop is not empty', () => {
        const loadStudentsMock = jest.fn();
        const setupProps = { loadStudents: loadStudentsMock };

        const wrapper = setupMount(setupProps);

        const loadStudentsCallCount = loadStudentsMock.mock.calls.length;
        expect(loadStudentsCallCount).toBe(0);
        wrapper.unmount();
      });
    });

    describe('loadDates', () => {
      test('should run if `dates` prop is empty', () => {
        const loadDatesMock = jest.fn();
        const setupProps = { dates: [], loadDates: loadDatesMock };

        const wrapper = setupMount(setupProps);

        const loadDatesCallCount = loadDatesMock.mock.calls.length;
        expect(loadDatesCallCount).toBe(1);
        wrapper.unmount();
      });

      test('should not run if `dates` prop is not empty', () => {
        const loadDatesMock = jest.fn();
        const setupProps = { loadDates: loadDatesMock };

        const wrapper = setupMount(setupProps);

        const loadDatesCallCount = loadDatesMock.mock.calls.length;
        expect(loadDatesCallCount).toBe(0);
        wrapper.unmount();
      });
    });

    describe('loadRooms', () => {
      test('should run if `room` prop is null', () => {
        const loadRoomsMock = jest.fn();
        const setupProps = { room: null, loadRooms: loadRoomsMock };

        const wrapper = setupMount(setupProps);

        const loadRoomsCallCount = loadRoomsMock.mock.calls.length;
        expect(loadRoomsCallCount).toBe(1);
        wrapper.unmount();
      });

      test('should not run if `room` prop is not null', () => {
        const loadRoomsMock = jest.fn();
        const setupProps = { loadRooms: loadRoomsMock };

        const wrapper = setupMount(setupProps);

        const loadRoomsCallCount = loadRoomsMock.mock.calls.length;
        expect(loadRoomsCallCount).toBe(0);
        wrapper.unmount();
      });
    });
  });
});