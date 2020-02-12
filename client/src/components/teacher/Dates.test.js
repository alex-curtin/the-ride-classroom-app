import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import Dates from './Dates';
import { findByTestAttr, datesProp } from '../../testUtils.js';

const defaultProps = {
  dates: datesProp
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

/**
 * Mounts component, for testing lifecycle methods.
 * @param {object} props - props for this setup.
 * @returns {ReactWrapper}
 */
const setupMount = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return mount(
    <Router>
      <Dates {...setupProps} />
    </Router>);
};

describe('Dates component', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-dates');
    expect(component.length).toBe(1);
  });

  test('should render dates if receiveing `dates` prop', () => {
    const wrapper = setup();
    const dateItem = findByTestAttr(wrapper, 'date-item');
    expect(dateItem.length).toBe(defaultProps.dates.length);
  });

  test('should render `loading` if dates prop not yet received', () => {
    const wrapper = setup({ dates: [] });
    const loading = findByTestAttr(wrapper, 'loading');
    expect(loading.length).toBe(1);
  });

  describe('loadDates', () => {
    test('should run if `dates` prop is empty', () => {
      const loadDatesMock = jest.fn();
      const props = { dates: [], loadDates: loadDatesMock };
      const wrapper = setupMount(props);

      const loadDatesCallCount = loadDatesMock.mock.calls.length;
      expect(loadDatesCallCount).toBe(1);
      wrapper.unmount();
    });

    test('should not run if `dates` props is not empty', () => {
      const loadDatesMock = jest.fn();
      const props = { loadDates: loadDatesMock }
      const wrapper = setupMount(props);

      const loadDatesCallCount = loadDatesMock.mock.calls.length;
      expect(loadDatesCallCount).toBe(0);
      wrapper.unmount();
    })
  });
});