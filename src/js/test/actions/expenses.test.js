import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

describe('removeExpense', () => {
  test('should setup remove expense action object', () => {
    expect(removeExpense({ id: '293' })).toEqual({
      type: 'REMOVE_EXPENSE',
      id: '293',
    });
  });
});

describe('editExpense', () => {
  test('should setup edit expense action', () => {
    const action = editExpense('023Arww', { amount: '35' });
    expect(action.type).toBe('EDIT_EXPENSE');
    expect(action.updates.amount).toBe('35');
  });
});

describe('addExpense', () => {
  test('it should set up addExpense action w/ given values', () => {
    const expense = {
      description: 'Cable bill',
      amount: '100',
      createdAt: 58877,
      note: 'Coffee',
    };
    const action = addExpense(expense);
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: { ...expense, id: expect.any(String) },
    });
  });

  test('it should return an action with default values for expenses if no argument was passed', () => {
    expect(addExpense()).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        description: '',
        amount: 0,
        createdAt: 0,
        note: '',
      },
    });
  });
});
