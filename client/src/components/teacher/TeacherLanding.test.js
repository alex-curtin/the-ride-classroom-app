import React from 'react';
import { shallow } from 'enzyme';

import TeacherLanding from './TeacherLanding';
import { findByTestAttr } from '../../testUtils';

/**
 * Creates a ShallowWrapper for TeacherLanding component.
 * @param {object} props - props for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<TeacherLanding {...setupProps} />);
};

describe('TeacherLanding component', () => {
  test('should render without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-teacher-landing');
    expect(component.length).toBe(1);
  })
})