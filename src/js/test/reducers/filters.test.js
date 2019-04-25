import moment from 'moment';
import filtersReducer from '../../reducers/filters';

describe('filters reducer', () => {
  let state;
  beforeEach(() => {
    state = {
      text: '',
      sortBy: 'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month'),
    };
  });

  test('should return state at app start', () => {
    const action = {
      type: '@@INIT',
    };
    expect(filtersReducer(undefined, action)).toEqual({
      text: '',
      sortBy: 'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month'),
    });
  });

  test('should change text filter', () => {
    const action = {
      type: 'SET_TEXT_FILTER',
      text: 'Coffee',
    };
    expect(filtersReducer(state, action)).toEqual({ ...state, text: 'Coffee' });
  });

  test('should set sortBy to amount', () => {
    const action = {
      type: 'SORT_BY_AMOUNT',
    };
    expect(filtersReducer(state, action)).toEqual({ ...state, sortBy: 'amount' });
  });

  test('should set sortBy to date', () => {
    const action = {
      type: 'SORT_BY_DATE',
    };
    expect(filtersReducer({ ...state, sortBy: 'amount' }, action)).toEqual({ ...state, sortBy: 'date' });
  });

  test('should set start date filter', () => {
    const startDate = moment().subtract(4, 'days');
    const action = {
      type: 'SET_START_DATE',
      startDate,
    };
    expect(filtersReducer(state, action)).toEqual({ ...state, startDate });
  });

  test('should set end date filter', () => {
    const endDate = moment().endOf('month').subtract(4, 'days');
    const action = {
      type: 'SET_END_DATE',
      endDate,
    };
    expect(filtersReducer(state, action)).toEqual({
      ...state,
      endDate,
    });
  });
});
