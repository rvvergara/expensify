import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({
  id,
  description,
  amount,
  createdAt,
}) => (
  <div>
    <h3>
Item:
      {' '}
      <Link to={`/edit/${id}`}>{description}</Link>
    </h3>
    <p>
Amount:
      {' '}
      {amount / 100}
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
