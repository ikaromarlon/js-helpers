const { getNumbers, numberFormat } = require('./formatters');

exports.cpfMask = (value) => {
  value = getNumbers(value);
  return value.length === 11 ? `${value.substr(0, 3)}.${value.substr(3, 3)}.${value.substr(6, 3)}-${value.substr(9, 2)}` : '';
};

exports.cnpjMask = (value) => {
  value = getNumbers(value);
  return value.length === 14 ? `${value.substr(0, 2)}.${value.substr(2, 3)}.${value.substr(5, 3)}/${value.substr(8, 4)}-${value.substr(12, 2)}` : '';
};

exports.cpfCnpjMask = (value) => {
  getNumbers(value);
  switch (value.length) {
  case 11: return this.cpfMask(value);
  case 14: return this.cnpjMask(value);
  default: return '';
  }
};

exports.cnpjParentMask = (value) => {
  value = getNumbers(value);
  return value.length === 14 ? `${value.substr(0, 2)}.${value.substr(2, 3)}.${value.substr(5, 3)}` : '';
};

exports.cepMask = (value) => {
  value = getNumbers(value);
  return value.length === 8 ? `${value.substr(0, 5)}-${value.substr(5, 3)}` : '';
};

exports.cnaeMask = (value) => {
  value = getNumbers(value);
  return value.length === 7 ? `${value.substr(0, 4)}-${value.substr(4, 1)}/${value.substr(5, 2)}` : value;
};

exports.phoneMask = (value) => {
  value = getNumbers(value);
  switch (value.length) {
  case 10: return `(${value.substr(0, 2)})${value.substr(2, 4)}-${value.substr(6, 4)}`;
  case 11: return `(${value.substr(0, 2)})${value.substr(2, 5)}-${value.substr(7, 4)}`;
  default: return '';
  }
};

exports.currencyMask = (value) => `R$ ${numberFormat(value, 2, ',', '.')}`;

exports.percentMask = (value, decimals = 2) => `${numberFormat(value, decimals, ',', '.')} %`;

exports.unmaskNumber = (value) => {
  if ([null, undefined, false, true, ''].includes(value) || typeof value === 'object') return null;
  return Number.isNaN(Number(value)) ? parseFloat(value.toString().replace(/[^0-9,-.]+/g, '').replace('.', '').replace(',', '.')) : value;
};
