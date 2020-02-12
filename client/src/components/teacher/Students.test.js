import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import Students from './Students';
import { findByTestAttr, studentsProp } from '../../testUtils.js';

const defaultProps = {
  students: studentsProp
}

/**
 * Creates a ShallowWrapper for Students component
 * @param {object} props - props for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Students {...setupProps} />);
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
      <Students {...setupProps} />
    </Router>);
};

describe('Students component', () => {
  test('should render without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-students');
    expect(component.length).toBe(1);
  });

  test('should render students if recieving `students` props', () => {
    const wrapper = setup();
    const studentItems = findByTestAttr(wrapper, 'student-item');
    expect(studentItems.length).toBe(defaultProps.students.length);
  });

  test('should render `loading` if students have not yet loaded', () => {
    const wrapper = setup({ students: [] });
    const loading = findByTestAttr(wrapper, 'loading');
    expect(loading.length).toBe(1);
  });

  describe('loadStudents on component mount', () => {
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
});
