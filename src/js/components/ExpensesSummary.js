import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ total, count }) => (
  <div>
    <h3>
        Showing
      {' '}
      { count }
      {' '}
      {count !== 1 ? 'items' : 'item'}
      {' '}
totalling
      {' '}
      { numeral(total).format('$0,0.00')}
    </h3>
  </div>
);

const mapStateToProps = state => ({
  total: expensesTotal(selectExpenses(state.expenses, state.filters)) / 100,
  count: selectExpenses(state.expenses, state.filters).length,
});


ExpensesSummary.propTypes = {
  total: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(ExpensesSummary);
