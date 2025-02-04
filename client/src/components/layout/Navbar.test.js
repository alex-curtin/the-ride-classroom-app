import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../testUtils';
import Navbar from './Navbar';

/**
 * Creates a ShallowWrapper for Navbar component
 * @param {object} props - props for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Navbar {...props} />);
};

describe('Navbar component', () => {
  test('should render without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-navbar');
    expect(component.length).toBe(1);
  });

  describe('should render correct links if `user` prop is `teacher', () => {
    const wrapper = setup({ user: 'teacher' });

    test('renders `teacher` links', () => {
      const teacherLinks = findByTestAttr(wrapper, 'teacher-links');
      expect(teacherLinks.length).toBe(1);
    });

    test('does not render `custodian` links', () => {
      const custodianLinks = findByTestAttr(wrapper, 'custodian-links');
      expect(custodianLinks.length).toBe(0);
    });
  });

  describe('should render correct links if `user` prop is `custodian', () => {
    const wrapper = setup({ user: 'custodian' });

    test('renders `custodian` links', () => {
      const teacherLinks = findByTestAttr(wrapper, 'custodian-links');
      expect(teacherLinks.length).toBe(1);
    });

    test('does not render `teacher` links', () => {
      const custodianLinks = findByTestAttr(wrapper, 'teacher-links');
      expect(custodianLinks.length).toBe(0);
    });
  });

  describe('`Toggle User` button', () => {
    const toggleUserMock = jest.fn();
    const wrapper = setup({ user: 'teacher', toggleUser: toggleUserMock });
    const button = findByTestAttr(wrapper, 'toggle-user-button');

    test('should render', () => {
      expect(button.length).toBe(1);
    });

    test('`toggleUser` should execute on click', () => {
      button.simulate('click');
      const toggleUserCallCount = toggleUserMock.mock.calls.length;
      expect(toggleUserCallCount).toBe(1);
    });
  });
});