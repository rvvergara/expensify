import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => {
  const { total, count } = props;
  return (
    <div>
      Showing
      {' '}
      { count }
      {' '}
items totalling
      {' '}
      { numeral(total).format('$0,0.00')}
    </div>
  );
};

const mapStateToProps = state => ({
  total: expensesTotal(selectExpenses(state.expenses, state.filters)),
  count: selectExpenses(state.expenses, state.filters).length,
});


ExpensesSummary.propTypes = {
  total: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(ExpensesSummary);
