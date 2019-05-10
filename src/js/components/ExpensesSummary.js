import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ total, count }) => (
  <div className="page-header">
    <div className="content-container">
      <h2 className="page-header__title">
        Showing
        {' '}
        { count }
        {' '}
        <span>{count !== 1 ? 'items' : 'item'}</span>
        {' '}
        totalling
        {' '}
        <span>{ numeral(total).format('$0,0.00')}</span>
      </h2>
      <div className="page-header__actions">
        <Link
          className="button"
          to="/create"
        >
          Add Expense
        </Link>
      </div>
    </div>
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
