import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export const EditExpense = (props) => {
  const {
    expense, editExpense, removeExpense, history, match,
  } = props;
  const { id } = match.params;
  const onSubmit = (updates) => {
    editExpense(id, updates);
    history.push('/');
  };
  return (
    <div>
      <ExpenseForm
        expense={expense}
        onSubmit={onSubmit}
      />
      <button
        type="button"
        onClick={() => {
          removeExpense({ id });
          history.push('/');
        }}
      >
      Delete
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(x => (
    x.id === props.match.params.id)),
});

const mapDispatchToProps = dispatch => ({
  editExpense: (id, updates) => dispatch(editExpense(id, updates)),
  removeExpense: ({ id }) => dispatch(removeExpense({ id })),
});

EditExpense.propTypes = {
  expense: PropTypes.instanceOf(Object).isRequired,
  editExpense: PropTypes.func.isRequired,
  removeExpense: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
