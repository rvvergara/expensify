import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {
  addExpense,
} from './actions/expenses';
import {
  setTextFilter,
} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import '../scss/style.scss';

const store = configureStore();

store.dispatch(addExpense({
  amount: 200,
  date: 1000,
  description: 'Water Bill',
}));

store.dispatch(addExpense({
  amount: 220,
  date: 1020,
  description: 'Gas Bill',
}));

store.dispatch(setTextFilter('water'));

setTimeout(() => store.dispatch(setTextFilter('gas')), 2000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
  <Provider store={store}><AppRouter /></Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
