import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm.js';
import expenses from '../fixtures/expenses';

describe('ExpenseForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ExpenseForm />);
  });
  test('it should render ExpenseForm with default values', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[2]} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render error for invalid form submission', () => {
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
  });

  test('should set description on input change', () => {
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(0).simulate('change', {
      target: { value: 'Coffee' },
    });
    expect(wrapper.state('description')).toBe('Coffee');
    expect(wrapper).toMatchSnapshot();
  });

  test('should set note on textarea change', () => {
    expect(wrapper).toMatchSnapshot();
    wrapper.find('textarea').simulate('change', {
      target: { value: 'New note' },
    });
    expect(wrapper.state('note')).toBe('New note');
    expect(wrapper).toMatchSnapshot();
  });

  test('should set amount if valid input', () => {
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change', {
      target: { value: '23.50' },
    });
    expect(wrapper.state('amount')).toBe('23.50');
    expect(wrapper).toMatchSnapshot();
  });

  test('should not set amount if invalid input', () => {
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change', {
      target: { value: '12.122' },
    });
    expect(wrapper.state('amount')).toBe('');
    expect(wrapper).toMatchSnapshot();
  });
});
