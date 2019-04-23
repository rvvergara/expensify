import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };

  onDatesChange = ({startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }

  onFocusChange = (calendarFocused) => this.setState(() => ({
    calendarFocused
  })) 
 
  render() {
    const {
      filters,
      dispatch,
    } = this.props;

    return (
      <div>
        <input
          type="text"
          value={filters.text}
          onChange={(e) => {
            dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          value={filters.sortBy}
          onChange={
            e => (e.target.value === 'date' ? dispatch(sortByDate()) : (e.target.value === dispatch(sortByAmount())))
          }
        >
          <option value="amount">Amount</option>
          <option value="date">Date</option>
        </select>
        <DateRangePicker 
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          startDateId={'startDateID'}
          endDateId={'endDateID'}
          isOutsideRange={() => false }
          numberOfMonths={1}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters,
});

export default connect(mapStateToProps)(ExpenseListFilters);
