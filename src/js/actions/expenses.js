import uuid from 'uuid';
import database from '../firebase/firebase';

// EXPENSE ACTION GENERATORS
const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense,
});

export const startAddExpense = (expenseData = {}) => (dispatch) => {
  const {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0,
  } = expenseData;
  const expense = {
    description,
    note,
    amount,
    createdAt,
  };
  return database.ref('expenses').push(expense)
    .then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense,
      }));
    })
    .catch(e => console.log('Error: ', e));
};
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

export {
  addExpense,
  editExpense,
  removeExpense,
};
