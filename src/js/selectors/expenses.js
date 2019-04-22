/* ======= GET VISIBLE EXPENSES ================================= */
const getVisibleExpenses = (expenses, {
  text, startDate, endDate, sortBy,
}) => expenses.filter((expense) => {
  const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
  const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
  const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
  return startDateMatch && endDateMatch && textMatch;
}).sort((a, b) => {
  if (sortBy === 'amount') return b[sortBy] - a[sortBy];
  if (sortBy === 'date') return b.createdAt - a.createdAt;
});

export default getVisibleExpenses;
