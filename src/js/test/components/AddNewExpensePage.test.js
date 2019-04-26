import React from 'react';
import { shallow } from 'enzyme';
import { AddExpense } from '../../components/AddNewExpensePage';
import expenses from '../fixtures/expenses';

describe('AddExpense', () => {
  let wrapper;
  let addExpenseSpy;
  let history;
  beforeEach(() => {
    addExpenseSpy = jest.fn();
    history = [];
    wrapper = shallow(<AddExpense addExpense={addExpenseSpy} history={history} />);
  });

  test('it should render AddExpense', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('addExpense should be called with expense item', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(addExpenseSpy).toHaveBeenCalledWith(expenses[0]);
  });

  test('history should have "/" as element', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history).toEqual(['/']);
  });
});
