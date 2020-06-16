module.exports = (key, order = 'asc') => (a, b) => {
  if (!a[key] || !b[key]) return 0;
  let result = 0;
  if (a[key] > b[key]) result = 1;
  if (b[key] > a[key]) result = -1;
  return order === 'desc' ? (result * -1) : result;
};
