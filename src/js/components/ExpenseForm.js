import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
export default class ExpenseForm extends React.Component {
  state = {
    description: this.props.expense ? this.props.expense.description : '',
    amount: this.props.expense ? String(this.props.expense.amount/100) : '',
    note: this.props.expense ? this.props.expense.note : '',
    createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
    calendarFocused: false,
    error: '',
  }
  
   handleChange = (key, value) => this.setState(() => ({
    [key]: value,
  }));

  onDateChange = (createdAt) => {if(createdAt) this.setState(() => ({createdAt}))};

  onFocusChange = ({focused}) => this.setState(() => ({ calendarFocused: focused }));

  onSubmit = (e) => {
    const {
      description,
      amount,
      note,
      createdAt
    } = this.state;
    e.preventDefault();
    if(!this.state.description || !this.state.amount){
      this.setState(() => ({ error: "Please enter description and amount"}))
    }else{
      this.setState(() => ({error: ''}));
      this.props.onSubmit({description, amount: parseFloat(amount) * 100, note, createdAt: createdAt.valueOf()});
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <div>
          {this.state.error}
        </div>}
        <form
          onSubmit={this.onSubmit}
        >
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={(e) => this.handleChange('description', e.target.value)}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={(e) => {
              const re = /^\d+(\.\d{0,2})?$/gi;
              if(!e.target.value || e.target.value.match(re)) this.handleChange('amount', e.target.value)
            }}
          />
          <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false }
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