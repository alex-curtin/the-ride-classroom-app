import React from 'react';
import { shallow } from 'enzyme';

import DeskItem from './DeskItem';
import { findByTestAttr } from '../../testUtils';
import { studentsProp } from '../../testUtils/mockData';

const defaultProps = { student: studentsProp[0] }

/**
 * Creates a ShallowWrapper for DeskItem component
 * @param {object} props - props for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<DeskItem {...setupProps} />);
};

describe('DeskItem component', () => {
  test('should render with students name if `student` prop not null', () => {
    const wrapper = setup();
    const studentName = findByTestAttr(wrapper, 'student-name');
    expect(studentName.length).toBe(1);
  });

  test('should render empty desk if `student` prop is null', () => {
    const wrapper = setup({ student: null });
    const emptyDesk = findByTestAttr(wrapper, 'empty-desk');
    expect(emptyDesk.length).toBe(1);
  })
});