module.exports = (value) => {
  if ([NaN, null, undefined, false, true, ''].includes(value) || typeof value === 'object') return value;
  return Number.isNaN(Number(value)) ? parseFloat(value.toString().replace(/[^0-9,-.]+/g, '').replace('.', '').replace(',', '.')) : value;
};
