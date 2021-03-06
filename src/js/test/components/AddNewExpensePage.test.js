import React from 'react';
import { shallow } from 'enzyme';
import { AddExpense } from '../../components/AddNewExpensePage';
import expenses from '../fixtures/expenses';

describe('AddExpense', () => {
  let wrapper;
  let startAddExpenseSpy;
  let history;
  beforeEach(() => {
    startAddExpenseSpy = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpense startAddExpense={startAddExpenseSpy} history={history} />);
  });

  test('it should render AddExpense', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('addExpense should be called with expense item', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(startAddExpenseSpy).toHaveBeenLastCalledWith(expenses[0]);
  });

  test('history push should have been called', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
  });
});
