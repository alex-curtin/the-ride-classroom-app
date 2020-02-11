import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import { findByTestAttr } from './testUtils.js';

const setup = (state = {}) => {
  const wrapper = shallow(<App />);
  wrapper.setState(state);
  return wrapper;
}

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});
