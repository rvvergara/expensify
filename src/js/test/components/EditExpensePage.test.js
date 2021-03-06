import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

describe('EditExpense', () => {
  let wrapper;
  let startEditExpenseSpy;
  let startRemoveExpenseSpy;
  let history;
  let match;
  let updates;
  beforeEach(() => {
    startEditExpenseSpy = jest.fn();
    startRemoveExpenseSpy = jest.fn();
    history = { push: jest.fn() };
    match = { params: { id: expenses[2].id } };
    updates = { description: 'Netflix' };
    wrapper = shallow(
      <EditExpense
        expense={expenses[2]}
        startEditExpense={startEditExpenseSpy}
        startRemoveExpense={startRemoveExpenseSpy}
        history={history}
        match={match}
      />,
    );
  });

  test('it should render EditExpense correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('editExpenseSpy', () => {
    beforeEach(() => {
      wrapper.find('ExpenseForm').prop('onSubmit')(updates);
    });
    test('editExpenseSpy should have been called with id and update object', () => {
      expect(startEditExpenseSpy).toHaveBeenLastCalledWith(expenses[2].id, updates);
    });

    test('history.push to have been called last with "/" after form submit', () => {
      expect(history.push).toHaveBeenLastCalledWith('/');
    });
  });

  describe('removeExpenseSpy', () => {
    beforeEach(() => {
      wrapper.find('button').simulate('click');
    });
    test('removeExpenseSpy should have been called with expense id', () => {
      expect(startRemoveExpenseSpy).toHaveBeenLastCalledWith({ id: expenses[2].id });
    });

    test('history.push to have been called last with "/" after clicking remove', () => {
      expect(history.push).toHaveBeenLastCalledWith('/');
    });
  });
});
