const getNumbers = require('./formatters/getNumbers');

module.exports = (value) => {
  const cleaned = getNumbers(value);
  return cleaned.length === 8 ? `${cleaned.substr(0, 5)}-${cleaned.substr(5, 3)}` : value;
};
