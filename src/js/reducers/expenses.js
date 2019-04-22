const expensesReducerDefaultState = [];

// EXPENSES REDUCER
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'EDIT_EXPENSE':
      return state.map(item => (item.id === action.id ? { ...item, updates: action.updates } : item));
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

export default expensesReducer;
