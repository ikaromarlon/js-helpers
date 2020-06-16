const numberFormat = require('../formatters/numberFormat');

module.exports = (value) => `R$ ${numberFormat(value, 2, ',', '.')}`;
