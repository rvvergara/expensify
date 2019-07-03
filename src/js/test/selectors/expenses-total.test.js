import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

describe('getExpensesTotal', () => {
  test('should return 0 if no expenses', () => {
    expect(getExpensesTotal([])).toBe(0);
  });

  test('should add up correctly a single expense', () => {
    expect(getExpensesTotal([expenses[0]])).toEqual(expenses[0].amount);
  });

  test('should add up correctly multiple expenses', () => {
    const sum = expenses[0].amount + expenses[1].amount + expenses[2].amount;
    expect(getExpensesTotal(expenses)).toBe(sum);
  });
});
