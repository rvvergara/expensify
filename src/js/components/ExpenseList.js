import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';

export const ExpenseList = ({ expenses }) => (
  <div>
    {
      expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        expenses.map(expense => (
          <ExpenseListItem
            key={expense.id}
            {...expense}
          />
        ))
      )
    }

  </div>
);

const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseList);
