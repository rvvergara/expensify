import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {
  addExpense, editExpense,
} from './actions/expenses';
import {
  setTextFilter,
} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import '../scss/style.scss';

const store = configureStore();

store.dispatch(addExpense({
  amount: 4500,
  description: 'Water Bill',
  createdAt: 1555992000000
  ,
}));

store.dispatch(addExpense({
  description: 'Gas Bill',
  createdAt: 1000,
}));

const rent = store.dispatch(addExpense({
  amount: 109500,
  description: 'Rent',
}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

// console.log(visibleExpenses);

const jsx = (
  <Provider store={store}><AppRouter /></Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
