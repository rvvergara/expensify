import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const EditExpense = (props) => {
  const { id } = props.match.params;
  const { expense, dispatch, history } = props;
  return (
    <div>
      <ExpenseForm
        expense={expense}
        onSubmit={(updates) => {
          dispatch(editExpense(id, updates));
          history.push('/');
        }}
      />
      <button
        type="button"
        onClick={() => {
          dispatch(removeExpense({ id }));
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

export default connect(mapStateToProps)(EditExpense);
