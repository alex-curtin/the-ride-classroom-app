import React from 'react';
import { shallow, mount } from 'enzyme';

import Dates from './Dates';
import { findByTestAttr } from '../../testUtils.js';

const defaultProps = {
  dates: [
    { date: 1577854800000 },
    { date: 1577941200000 },
    { date: 1578027600000 }
  ]
};

/**
 * Creates a ShallowWrapper for Dates component.
 * @param {object} props - props for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Dates {...setupProps} />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-dates');
  expect(component.length).toBe(1);
});

test('renders dates if receiveing `dates` prop', () => {
  const wrapper = setup();
  const dateItem = findByTestAttr(wrapper, 'date-item');
  expect(dateItem.length).toBe(defaultProps.dates.length);
});

test('renders `loading` if dates prop not yet received', () => {
  const wrapper = setup({ dates: [] });
  const loading = findByTestAttr(wrapper, 'loading');
  expect(loading.length).toBe(1);
});

test('loadDates runs on component mount', () => {
  const loadDatesMock = jest.fn();
  const wrapper = mount(<Dates dates={[]} loadDates={loadDatesMock} />);
  wrapper.mount();

  const loadDatesCallCount = loadDatesMock.mock.calls.length;
  expect(loadDatesCallCount).toBe(1);
  // wrapper.unmount();
});