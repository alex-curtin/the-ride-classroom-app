import React from 'react';
import { shallow } from 'enzyme';

import CustodianLanding from './CustodianLanding';
import { findByTestAttr } from '../../testUtils';

/**
 * Creates a ShallowWrapper for CustodianLanding component.
 * @param {object} props - props for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<CustodianLanding {...setupProps} />);
};

describe('CustodianLanding component', () => {
  test('should render without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-custodian-landing');
    expect(component.length).toBe(1);
  })
})