import React from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddNewExpensePage from '../components/AddNewExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

export default () => (
  <Router
    history={history}
  >
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddNewExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);
