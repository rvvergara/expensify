import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

describe('ExpenseListFilters', () => {
  let wrapper;
  let setTextFilter;
  let sortByAmount;
  let sortByDate;
  let setStartDate;
  let setEndDate;

  beforeEach(() => {
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();

    wrapper = shallow(<ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />);
  });
  test('should render ExpenseListFilters correctly with filters', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render with altFilters', () => {
    wrapper.setProps({ filters: altFilters });
    expect(wrapper).toMatchSnapshot();
  });

  test('should handle test change', () => {
    const value = 'water';
    wrapper.find('input').at(0).simulate('change', {
      target: { value },
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
  });

  test('should sort by date', () => {
    wrapper.setProps({ filters: altFilters });
    const value = 'date';
    wrapper.find('select').simulate('change', { target: { value } });
    expect(sortByDate).toHaveBeenCalled();
  });

  test('should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', { target: { value } });
    expect(sortByAmount).toHaveBeenCalled();
  });

  test('should handle date focus change', () => {
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')('startDate');
    expect(wrapper.state('calendarFocused')).toBe('startDate');
  });
});
