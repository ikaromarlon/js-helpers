const getNumbers = require('./formatters/getNumbers');

module.exports = (value) => {
  const cleaned = getNumbers(value);
  switch (cleaned.length) {
  case 10: return `(${cleaned.substr(0, 2)})${cleaned.substr(2, 4)}-${cleaned.substr(6, 4)}`;
  case 11: return `(${cleaned.substr(0, 2)})${cleaned.substr(2, 5)}-${cleaned.substr(7, 4)}`;
  default: return value;
  }
};
