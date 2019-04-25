import moment from 'moment';
import getVisibleExpenses from '../../selectors/expenses';
import expensesData from '../fixtures/expenses';

describe('getVisibleExpenses', () => {
  let expenses;
  beforeEach(() => {
    expenses = expensesData;
  });

  test('should filter by text value', () => {
    const filters = {
      text: 'e',
      sortBy: 'date',
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]]);
  });

  test('should filter by startDate', () => {
    const filters = {
      text: '',
      sortBy: 'date',
      startDate: moment(0),
      endDate: undefined,
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);
  });

  test('should filter by endDate', () => {
    const filters = {
      text: '',
      sortBy: 'date',
      startDate: undefined,
      endDate: moment(0).add(2, 'days'),
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
  });

  test('should sort by date', () => {
    expect(getVisibleExpenses(expenses, {
      sortBy: 'date',
    })).toEqual([expenses[2], expenses[0], expenses[1]]);
  });

  test('should sort by amount', () => {
    expect(getVisibleExpenses(expenses, {
      sortBy: 'amount',
    })).toEqual([expenses[1], expenses[2], expenses[0]]);
  });
});
