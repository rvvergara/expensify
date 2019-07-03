/* eslint-disable no-case-declarations */
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

/* ============== 1. ACTION GENERATORS =============== */
// EXPENSE ACTION GENERATORS
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0,
  } = {},
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    createdAt,
    amount,
  },
});
// REMOVE_EXPENSE GENERATOR
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});
// EDIT_EXPENSE GENERATOR
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});

// FILTERS ACTIONS GENERATORS
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

// SET_START_DATE
const setStartDate = startDate => ({
  type: 'SET_START_DATE',
  startDate,
});

// SET_END_DATE
const setEndDate = endDate => ({
  type: 'SET_END_DATE',
  endDate,
});
/* ================================ */

/* ==== DEFAULT STATES ==== */
const expensesReducerDefaultState = [];

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};

/* ================== */


/* ======================= 2.REDUCERS ================================ */

// EXPENSES REDUCER
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'EDIT_EXPENSE':
      const { updates } = action;
      return state.map(item => (item.id === action.id ? { ...item, ...updates } : item));
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};
// FILTERS REDUCER
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      const { text } = action;
      return { ...state, text };
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate };
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};
/* ============================================================================= */

/* ======= GET VISIBLE EXPENSES ================================= */
const getVisibleExpenses = (expenses, {
  text, startDate, endDate, sortBy,
}) => expenses.filter((expense) => {
  const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
  const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
  const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
  return startDateMatch && endDateMatch && textMatch;
}).sort((a, b) => {
  if (sortBy === 'amount') return b[sortBy] - a[sortBy];
  if (sortBy === 'date') return b.createdAt - a.createdAt;
});

/* ================================================================= */


/* =============== 3.STORE ============================== */
// STORE CREATION
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  }),
);
// SUBSCRIBE TO STORE
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

/* ============================================= */

/* ============= CHANGING STATE BY DISPATCHING ACTIONS ========================= */
const expenseOne = store.dispatch(addExpense({
  description: 'January rental expense', amount: 100, createdAt: -21000,
}));

const expenseTwo = store.dispatch(addExpense({
  description: 'Coffee', amount: 300, createdAt: -1000,
}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { description: 'Food', amount: 70 }));

// store.dispatch(setTextFilter('ood'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());

// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

/* ============= DEMO =========================== */
const demoState = {
  expenses: [{
    id: 'lrarlaraha',
    description: 'January rent',
    note: 'Final payment for that address',
    amount: 54500,
    createdAt: 0,
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined,
  },
};
/* ======================================== */
