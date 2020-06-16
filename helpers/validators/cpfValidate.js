const getNumbers = require('../formatters/getNumbers');

module.exports = (value) => {
  value = getNumbers(value);
  if (
    value === ''
    || value.length !== 11
    || value === '00000000000'
    || value === '11111111111'
    || value === '22222222222'
    || value === '33333333333'
    || value === '44444444444'
    || value === '55555555555'
    || value === '66666666666'
    || value === '77777777777'
    || value === '88888888888'
    || value === '99999999999'
  ) {
    return false;
  }
  let add = 0;
  let rev = 0;
  let i = 0;
  for (i = 0; i < 9; i++) {
    add += +(value.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);

    if (rev === 10 || rev === 11) {
      rev = 0;
    }
  }
  if (rev !== +(value.charAt(9))) {
    return false;
  }
  add = 0;
  for (i = 0; i < 10; i++) {
    add += +(value.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
      rev = 0;
    }
  }
  if (rev !== +(value.charAt(10))) {
    return false;
  }
  return true;
};
