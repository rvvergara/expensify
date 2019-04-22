import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({
  id,
  description,
  amount,
  createdAt,
  dispatch,
}) => (
  <div>
    <h3>
Item:
      {' '}
      {description}
    </h3>
    <p>
Amount:
      {' '}
      {amount}
      {' '}
$
    </p>
    <p>
When:
      {' '}
      {new Date(createdAt).toDateString()}
    </p>
    <button
      type="button"
      onClick={() => {
        dispatch(removeExpense({ id }));
      }}
    >
      Delete
    </button>
  </div>
);

export default connect()(ExpenseListItem);
