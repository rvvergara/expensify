import moment from 'moment';
import getVisibleExpenses from '../../selectors/expenses';

describe('getVisibleExpenses', () => {
  let expenses;
  beforeEach(() => {
    expenses = [
      {
        id: 1,
        description: 'Gum',
        amount: 195,
        note: '',
        createdAt: 0,
      },
      {
        id: 2,
        description: 'Rent',
        amount: 109500,
        note: '',
        createdAt: moment(0).subtract(4, 'days').valueOf(),
      },
      {
        id: 3,
        description: 'Credit card',
        amount: 4500,
        note: '',
        createdAt: moment(0).add(4, 'days').valueOf(),
      },
    ];
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
