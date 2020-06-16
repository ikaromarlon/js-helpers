const getNumbers = require('./formatters/getNumbers');
const cnpjMask = require('./cnpjMask');
const cpfMask = require('./cpfMask');

module.exports = (value) => {
  const cleaned = getNumbers(value);
  switch (cleaned.length) {
  case 11: return cpfMask(cleaned);
  case 14: return cnpjMask(cleaned);
  default: return value;
  }
};
