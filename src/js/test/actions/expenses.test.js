import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

import {
  addExpense, editExpense, removeExpense, startAddExpense,
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';

const createMockStore = configureMockStore([thunk]);

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

describe('addExpense and startAddExpense', () => {
  test('it should set up addExpense action w/ given values', () => {
    const expense = expenses[0];
    const action = addExpense(expense);
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: { ...expense },
    });
  });
});

describe('startAddExpense', () => {
  let store;
  beforeEach(() => {
    store = createMockStore({});
  });
  test('it should add expense to database and store', (done) => {
    const expenseData = {
      description: 'Mouse',
      amount: 3000,
      note: 'This one is better',
      createdAt: 1000,
    };
    store.dispatch(startAddExpense(expenseData))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: 'ADD_EXPENSE',
          expense: { id: expect.any(String), ...expenseData },
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
      })
      .then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
      });
  });

  test('it should add expense with defaults to database and store', (done) => {
    const expenseDefaults = {
      description: '',
      amount: 0,
      createdAt: 0,
      note: '',
    };

    const {
      description,
      amount,
      createdAt,
      note,
    } = expenseDefaults;

    store.dispatch(startAddExpense({}))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: 'ADD_EXPENSE',
          expense: {
            id: expect.any(String),
            description,
            createdAt,
            amount,
            note,
          },
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
      })
      .then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
      });
  });
});
