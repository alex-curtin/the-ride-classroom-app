import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import StudentDetails from './StudentDetails';
import { findByTestAttr } from '../../testUtils';
import { studentsProp } from '../../testUtils/mock-props';

const defaultProps = {
  student: studentsProp[0]
};

/**
 * Creates a ShallowWrapper for StudentDetails component
 * @param {object} props - props for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<StudentDetails {...setupProps} />);
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
      <StudentDetails {...setupProps} />
    </Router>);
};

describe('StudentDetails component', () => {
  test('should render without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-student-details');
    expect(component.length).toBe(1);
  });

  test('should render all grades', () => {
    const wrapper = setup();
    const gradeItems = findByTestAttr(wrapper, 'grade-item');
    const expectedResult = Object.keys(defaultProps.student.grades).length
    expect(gradeItems.length).toBe(expectedResult);
  })

  describe('loadStudents', () => {
    test('should run if `students` prop is null', () => {
      const loadStudentsMock = jest.fn();
      const props = { student: null, loadStudents: loadStudentsMock };

      const wrapper = setupMount(props);

      const loadStudentsCallCount = loadStudentsMock.mock.calls.length;
      expect(loadStudentsCallCount).toBe(1);
    });

    test('should not run if `students` prop is not null', () => {
      const loadStudentsMock = jest.fn();
      const props = { loadStudents: loadStudentsMock };

      const wrapper = setupMount(props);

      const loadStudentsCallCount = loadStudentsMock.mock.calls.length;
      expect(loadStudentsCallCount).toBe(0);
    });
  });
});