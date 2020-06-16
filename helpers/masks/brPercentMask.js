const numberFormat = require('../formatters/numberFormat');

module.exports = (value, decimals = 2) => `${numberFormat(value, decimals, ',', '.')} %`;
