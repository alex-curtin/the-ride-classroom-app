import React from 'react';
import { shallow } from 'enzyme';

import DeskRepairs from './DeskRepairs';
import { findByTestAttr } from '../../testUtils';
import { desksProp } from '../../testUtils/mockData';

const defaultProps = {
  repairs: desksProp[0].repairs
};

/**
 * Creates a ShallowWrapper for DeskRepairs component.
 * @param {object} props - props for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<DeskRepairs {...setupProps} />);
};

describe('DeskRepairs component', () => {
  test('should render without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-desk-repairs');
    expect(component.length).toBe(1);
  });

  test('should render all repairs', () => {
    const wrapper = setup();
    const repairItems = findByTestAttr(wrapper, 'repair-item');
    expect(repairItems.length).toBe(defaultProps.repairs.length);
  });
});