import React from 'react';
import { shallow, mount } from 'enzyme';

import Desks from './Desks';
import { findByTestAttr, desksProp } from '../../testUtils.js';

const defaultProps = { desks: desksProp };

/**
 * Creates a ShallowWrapper for Desks component
 * @param {object} props - props for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Desks {...setupProps} />);
};

describe('Desks component', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-desks');
    expect(component.length).toBe(1);
  });

  test('renders `loading` if `desks` prop not yet recieved', () => {
    const wrapper = setup({ desks: [] });
    const loading = findByTestAttr(wrapper, 'loading');
    expect(loading.length).toBe(1);
  });

  test('renders desks', () => {
    const wrapper = setup();
    const deskItems = findByTestAttr(wrapper, 'desk-item');
    expect(deskItems.length).toBe(defaultProps.desks.length);
  });

  describe('loadDesks function', () => {
    test('runs if desks prop is empty', () => {
      const loadDesksMock = jest.fn();
      const setupProps = { desks: [], loadDesks: loadDesksMock };
      const props = { ...defaultProps, ...setupProps };
      const wrapper = mount(<Desks {...props} />);

      const loadDesksCallCount = loadDesksMock.mock.calls.length;
      expect(loadDesksCallCount).toBe(1);
    });

    test('does not run if desks prop is not empty', () => {
      const loadDesksMock = jest.fn();
      const setupProps = { loadDesks: loadDesksMock };
      const props = { ...defaultProps, ...setupProps };
      const wrapper = mount(<Desks {...props} />);

      const loadDesksCallCount = loadDesksMock.mock.calls.length;
      expect(loadDesksCallCount).toBe(0);
    })

  });
});
