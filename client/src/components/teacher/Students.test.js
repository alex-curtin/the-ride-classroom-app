import React from 'react';
import { shallow, mount } from 'enzyme';

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

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-students');
  expect(component.length).toBe(1);
});

test('renders students if recieving `students` props', () => {
  const wrapper = setup();
  const studentItems = findByTestAttr(wrapper, 'student-item');
  expect(studentItems.length).toBe(defaultProps.students.length);
});

test('renders `loading` if students have not yet loaded', () => {
  const wrapper = setup({ students: [] });
  const loading = findByTestAttr(wrapper, 'loading');
  expect(loading.length).toBe(1);
});

test('loadStudents runs on component mount', () => {
  const loadStudentsMock = jest.fn();
  const wrapper = mount(<Students students={[]} loadStudents={loadStudentsMock} />);

  const loadStudentsCallCount = loadStudentsMock.mock.calls.length;
  expect(loadStudentsCallCount).toBe(1);
  wrapper.unmount();
});

