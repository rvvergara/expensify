import moment from 'moment';
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from '../../actions/filters';

describe('setTextFilter', () => {
  test('it should set up the text filter action', () => {
    expect(setTextFilter('eat')).toEqual({
      type: 'SET_TEXT_FILTER',
      text: 'eat',
    });
  });

  test('it should set the text filter to empty string if no argument was passed', () => {
    expect(setTextFilter().text).toBe('');
  });
});

describe('sortByAmount', () => {
  test('it should set up sort by amount action', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
  });
});

describe('sortByDate', () => {
  test('it should set up sort by date action', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
  });
});

describe('setStartDate', () => {
  test('it should set up a start date action', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
      type: 'SET_START_DATE',
      startDate: moment(0),
    });
  });
});

describe('setEndDate', () => {
  test('it should set up a start date action', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
      type: 'SET_END_DATE',
      endDate: moment(0),
    });
  });
});
