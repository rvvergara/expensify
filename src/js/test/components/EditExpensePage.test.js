import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

describe('EditExpense', () => {
  let wrapper;
  let editExpenseSpy;
  let removeExpenseSpy;
  let history;
  let match;
  let updates;
  beforeEach(() => {
    editExpenseSpy = jest.fn();
    removeExpenseSpy = jest.fn();
    history = { push: jest.fn() };
    match = { params: { id: expenses[2].id } };
    updates = { description: 'Netflix' };
    wrapper = shallow(
      <EditExpense
        expense={expenses[2]}
        editExpense={editExpenseSpy}
        removeExpense={removeExpenseSpy}
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
      expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[2].id, updates);
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
      expect(removeExpenseSpy).toHaveBeenLastCalledWith({ id: expenses[2].id });
    });

    test('history.push to have been called last with "/" after clicking remove', () => {
      expect(history.push).toHaveBeenLastCalledWith('/');
    });
  });
});
