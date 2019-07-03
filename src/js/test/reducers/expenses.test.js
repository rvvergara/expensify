import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

describe('expenses reducer', () => {
  test('it should return default state', () => {
    expect(expensesReducer(undefined, { type: '@@INIT' })).toEqual([]);
  });

  test('it should add an expense', () => {
    const expense = {
      description: 'Coffee',
      amount: 1250,
      createdAt: moment(),
    };
    expect(expensesReducer(expenses, { type: 'ADD_EXPENSE', expense })).toEqual([...expenses, expense]);
  });

  test('it should edit an existing expense', () => {
    const updates = {
      description: 'Cable bill',
      amount: '1000',
      note: 'no more problem',
    };
    expect(expensesReducer(expenses, { type: 'EDIT_EXPENSE', id: expenses[0].id, updates })).toEqual([{ ...updates, id: expenses[0].id, createdAt: expenses[0].createdAt }, ...expenses.slice(1)]);
  });

  test('it should not edit a non-existent expense', () => {
    const updates = {
      description: 'Cable bill',
    };
    expect(expensesReducer(expenses, { type: 'EDIT_EXPENSE', id: 27, updates })).toEqual(expenses);
  });

  test('it should remove an existing expense', () => {
    expect(expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: expenses[1].id })).toEqual([expenses[0], expenses[2]]);
  });

  test('it should not change state when expense does not exist', () => {
    expect(expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: 5 })).toEqual(expenses);
  });

  test('it should set expenses based on data passed', () => {
    const action = {
      type: 'SET_EXPENSES',
      expenses,
    };

    expect(expensesReducer([], action)).toEqual(expenses);
  });
});
