const getExpensesTotal = (expenses) => {
  if (expenses) {
    return expenses.reduce((a, b) => a + b.amount, 0);
  }
  return 0;
};

export default getExpensesTotal;
