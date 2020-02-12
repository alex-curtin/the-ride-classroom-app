import React from 'react';
import { shallow } from 'enzyme';

import DeskHistory from './DeskHistory';
import { findByTestAttr, desksProp, datesProp, studentsProp, roomsProp } from '../../testUtils.js';

const defaultProps = {
  dates: datesProp,
  desk: desksProp[0],
  room: roomsProp[0],
  students: studentsProp
};

/**
 * Creates a ShallowWrapper for DeskHistory component.
 * @param {object} props - props for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<DeskHistory {...setupProps} />);
};

describe('DeskHistory component', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-desk-history');
    expect(component.length).toBe(1);
  });

  test('should render all dates passed in `dates` prop', () => {
    const wrapper = setup();
    const dateItems = findByTestAttr(wrapper, 'date-item');
    expect(dateItems.length).toBe(defaultProps.dates.length);
  })
});