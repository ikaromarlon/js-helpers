const getNumbers = require('./formatters/getNumbers');

module.exports = (value) => {
  const cleaned = getNumbers(value);
  return cleaned.length === 14 ? `${cleaned.substr(0, 2)}.${cleaned.substr(2, 3)}.${cleaned.substr(5, 3)}` : value;
};
