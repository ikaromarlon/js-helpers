const isEmpty = require('../misc/isEmpty');

module.exports = (value) => (![null, undefined, false, '', '{}', '[]'].includes(value) ? value.toString().replace(/[^0-9]+/g, '') : '');
