import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

const ExpenseListFilters = ({ filters, dispatch }) => (
  <div>
    <input
      type="text"
      value={filters.text}
      onChange={(e) => {
        dispatch(setTextFilter(e.target.value));
      }}
    />
  </div>
);

const mapStateToProps = state => ({
  filters: state.filters,
});

export default connect(mapStateToProps)(ExpenseListFilters);
