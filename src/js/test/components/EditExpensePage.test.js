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
    history = [];
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

  test('editExpenseSpy should have been called with id and update object', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(updates);
    expect(editExpenseSpy).toHaveBeenCalledWith(expenses[2].id, updates);
  });

  test('"/" should be added to history upon form submit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(updates);
    expect(history).toEqual(['/']);
  });

  test('removeExpenseSpy should have been called with expense id', () => {
    wrapper.find('button').at(0).prop('onClick')();
    expect(removeExpenseSpy).toHaveBeenCalledWith({ id: expenses[2].id });
  });

  test('"/" should be added to history upon clicking delete button', () => {
    wrapper.find('button').at(0).prop('onClick')();
    expect(history).toEqual(['/']);
  });
});
