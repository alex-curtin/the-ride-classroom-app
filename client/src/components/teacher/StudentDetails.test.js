import React from 'react';
import { shallow } from 'enzyme';

import StudentDetails from './StudentDetails';
import { findByTestAttr } from '../../testUtils.js';

const defaultProps = {
  student: {
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
  }
}

/**
 * Creates a ShallowWrapper for StudentDetails component
 * @param {object} props - props for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<StudentDetails {...setupProps} />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-student-details');
  expect(component.length).toBe(1);
})