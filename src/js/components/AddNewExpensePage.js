import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export const AddExpense = (props) => {
  const onSubmit = (expense) => {
    props.addExpense(expense);
    props.history.push('/');
  };
  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={onSubmit}
      />
    </div>
  );
};

AddExpense.propTypes = {
  addExpense: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default connect(null, { addExpense })(AddExpense);
