import React from 'react';

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    amount: '',
    note: '',
    action: this.props.action
  }
  handleChange = (key, value) => this.setState(() => ({
    [key]: value,
  }))
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            required
            onChange={(e) => this.handleChange('description', e.target.value)}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={(e) => {
              const re = /^\d*(\.\d{0,2})?$/gi;
              if(e.target.value.match(re)) this.handleChange('amount', e.target.value)
            }}
          />
          <textarea
            placeholder="Add a note to your expense (optional)"
            value={this.state.note}
            onChange={(e) => this.handleChange('note', e.target.value)}
          />
          <button
            type="submit"
          >
            Add Expense
          </button>
        </form>
      </div>
    );
  }
}
