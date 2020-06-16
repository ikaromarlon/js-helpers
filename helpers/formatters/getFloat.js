const isEmpty = require('../misc/isEmpty');

module.exports = (value) => {
  if (isEmpty(value)) return '';
  const newValue = (/[0-9]+[,.]{0,1}[0-9]{0,2}/g).exec(value);
  if (!newValue) return '';
  return newValue[0].replace(/,/g, '.');
};
