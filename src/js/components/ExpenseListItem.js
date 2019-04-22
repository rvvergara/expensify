import React from 'react';

const ExpenseListItem = ({
  description,
  amount,
  createdAt,
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
  </div>
);

export default ExpenseListItem;
