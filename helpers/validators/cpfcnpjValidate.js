const getNumbers = require('../formatters/getNumbers');
const cpfValidate = require('./cpfValidate');
const cnpjValidate = require('./cnpjValidate');

module.exports = function (value) {
  value = getNumbers(value);
  switch (value.length) {
  case 11: return cpfValidate(value);
  case 14: return cnpjValidate(value);
  default: return false;
  }
};
