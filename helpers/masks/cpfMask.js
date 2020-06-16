const getNumbers = require('./formatters/getNumbers');

module.exports = (value) => {
  const cleaned = getNumbers(value);
  return cleaned.length === 11 ? `${cleaned.substr(0, 3)}.${cleaned.substr(3, 3)}.${cleaned.substr(6, 3)}-${cleaned.substr(9, 2)}` : value;
};
