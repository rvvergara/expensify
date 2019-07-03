import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';


export class EditExpense extends React.Component {
  onSubmit = (updates) => {
    const { startEditExpense, match, history} = this.props;
    const { id } = match.params;
    startEditExpense(id, updates);
    history.push('/');
  };

  onClick = () => {
    const { match, history, startRemoveExpense } = this.props;
    const { id } = match.params;
    startRemoveExpense({ id });
    history.push('/');
  }

  render(){
    const {
      expense,
    } = this.props;

    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={expense}
            onSubmit={this.onSubmit}
          />
          <button
            className="button button--secondary"
            type="button"
            onClick={this.onClick}
          >
          Remove Expense
          </button>
        </div>
      </div>
    );  
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(x => (
    x.id === props.match.params.id)),
});

const mapDispatchToProps = dispatch => ({
  startEditExpense: (id, updates) => dispatch(startEditExpense(id, updates)),
  startRemoveExpense: ({ id }) => dispatch(startRemoveExpense({ id })),
});

EditExpense.propTypes = {
  expense: PropTypes.instanceOf(Object),
  startEditExpense: PropTypes.func.isRequired,
  startRemoveExpense: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
