module.exports = (value) => (Number.isNaN(Number(value)) ? parseFloat(value.toString().replace(/[^0-9,-.]+/g, '').replace(/\./g, '').replace(/,/g, '.')) : value);
