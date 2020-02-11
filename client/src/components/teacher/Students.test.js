import React from 'react';
import { shallow, mount } from 'enzyme';

import Students from './Students';
import { findByTestAttr } from '../../testUtils.js';

const defaultProps = {
  students: [{
    id: "3b0d7462-8ba1-4a5c-8a64-7721f7a9947c",
    bio: {
      givenName: "Aisling",
      familyName: "Worthington",
      nickName: "Aisey",
      email: "aisey@email.me",
      age: 15,
      grade: 10
    },
    history: {
      absences: 5,
      gpa: 3.7
    },
    grades: {
      project1: 92,
      project2: 88,
      project3: 91,
      project4: "n/a"
    }
  }]
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

test('getStudents runs on component mount', () => {
  const getStudentsMock = jest.fn();
  const wrapper = mount(<Students students={[]} getStudents={getStudentsMock} />);
  wrapper.mount();

  const getStudentsCallCount = getStudentsMock.mock.calls.length;
  expect(getStudentsCallCount).toBe(1);
  wrapper.unmount();
});

