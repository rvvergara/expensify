import { createStore, combineReducers } from 'redux';

// People dropping off forms (Action generators)
const createClaim = ({ name, amount }) => ({
  type: 'CREATE_CLAIM',
  payload: {
    name,
    amount,
  },
});

const createPolicy = name => ({
  type: 'CREATE_POLICY',
  payload: {
    name,
    amount: 20,
  },
});

const deletePolicy = name => ({
  type: 'DELETE_POLICY',
  payload: { name },
});

// Departments - reducers
const claimsReducer = (state = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    return [...state, action.payload];
  }
  return state;
};

const policyReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_POLICY':
      return [...state, action.payload.name];
    case 'DELETE_POLICY':
      if (state.map(policy => policy).includes(action.payload.name)) {
        return state.filter(policy => policy !== action.payload.name);
      }
      return state;

    default:
      return state;
  }
};

const accountingReducer = (state = 100, action) => {
  switch (action.type) {
    case 'CREATE_CLAIM':
      return state - action.payload.amount;
    case 'CREATE_POLICY':
      return state + action.payload.amount;
    default:
      return state;
  }
};

// store
const store = createStore(combineReducers({
  claims: claimsReducer,
  policy: policyReducer,
  accounting: accountingReducer,
}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => console.log(store.getState()));

store.dispatch(createPolicy('Murphy'));
store.dispatch(createPolicy('John'));
store.dispatch(createClaim({ name: 'John', amount: 30 }));
store.dispatch(deletePolicy('John'));
