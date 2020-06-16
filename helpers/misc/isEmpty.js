module.exports = (value) => [null, undefined, false, 0, '', '{}', '[]'].includes(
  value && typeof value === 'object'
    ? JSON.stringify(value)
    : value,
);
