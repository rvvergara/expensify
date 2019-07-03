const getExpensesTotal = expenses => expenses.reduce((a, b) => a + b.amount, 0);

export default getExpensesTotal;
