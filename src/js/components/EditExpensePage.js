import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';


export class EditExpense extends React.Component {
  onSubmit = (updates) => {
    const { editExpense, match, history} = this.props;
    const { id } = match.params;
    editExpense(id, updates);
    history.push('/');
  };

  onClick = () => {
    const { match, history, removeExpense } = this.props;
    const { id } = match.params;
    removeExpense({ id });
    history.push('/');
  }

  render(){
    const {
      expense,
    } = this.props;

    return (
      <div>
        <ExpenseForm
          expense={expense}
          onSubmit={this.onSubmit}
        />
        <button
          type="button"
          onClick={this.onClick}
        >
        Delete
        </button>
      </div>
    );  
  }
}

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
