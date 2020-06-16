const getNumbers = require('./formatters/getNumbers');

module.exports = (value) => {
  const cleaned = getNumbers(value);
  return cleaned.length === 7 ? `${cleaned.substr(0, 4)}-${cleaned.substr(4, 1)}/${cleaned.substr(5, 2)}` : value;
};
