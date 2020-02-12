import React from 'react';
import { shallow, mount } from 'enzyme';
import { StaticRouter as Router } from 'react-router-dom';

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

/**
 * Mounts component, for testing lifecycle methods.
 * @param {object} props - props for this setup.
 * @returns {ReactWrapper}
 */
const setupMount = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return mount(
    <Router>
      <Desks {...setupProps} />
    </Router>
  );
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
      const props = { desks: [], loadDesks: loadDesksMock };

      const wrapper = setupMount(props);

      const loadDesksCallCount = loadDesksMock.mock.calls.length;
      expect(loadDesksCallCount).toBe(1);
    });

    test('does not run if desks prop is not empty', () => {
      const loadDesksMock = jest.fn();
      const props = { loadDesks: loadDesksMock };

      const wrapper = setupMount(props);

      const loadDesksCallCount = loadDesksMock.mock.calls.length;
      expect(loadDesksCallCount).toBe(0);
    })

  });
});
