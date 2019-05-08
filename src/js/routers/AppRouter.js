import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddNewExpensePage from '../components/AddNewExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';

export default () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <Route path="/dashboard" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddNewExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
