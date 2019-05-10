import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = calendarFocused =>
    this.setState(() => ({
      calendarFocused,
    }));

  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };

  onSelectChange = e =>
    e.target.value === 'date'
      ? this.props.sortByDate()
      : e.target.value === this.props.sortByAmount();

  render() {
    const { filters } = this.props;
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input type="text" value={filters.text} onChange={this.onTextChange} />
          </div>
          <div className="input-group__item">
            <select
              value={filters.sortBy}
              onChange={this.onSelectChange}>
              <option value="amount">Amount</option>
              <option value="date">Date</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              startDateId={'startDateID'}
              endDateId={'endDateID'}
              isOutsideRange={() => false}
              numberOfMonths={1}
              showClearDates={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters,
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: value => dispatch(setTextFilter(value)),
  sortByAmount: () => dispatch(sortByAmount()),
  sortByDate: () => dispatch(sortByDate()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpenseListFilters);
