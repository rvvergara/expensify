import moment from 'moment';

/* ======= GET VISIBLE EXPENSES ================================= */
const getVisibleExpenses = (expenses, {
  text, startDate, endDate, sortBy,
}) => expenses.filter((expense) => {
  const createAtMoment = moment(expense.createdAt);
  const startDateMatch = startDate ? startDate.isSameOrBefore(createAtMoment, 'day') : true;
  const endDateMatch = endDate ? endDate.isSameOrAfter(createAtMoment, 'day') : true;
  const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
  return startDateMatch && endDateMatch && textMatch;
}).sort((a, b) => {
  if (sortBy === 'amount') return b[sortBy] - a[sortBy];
  if (sortBy === 'date') return b.createdAt - a.createdAt;
});

export default getVisibleExpenses;
