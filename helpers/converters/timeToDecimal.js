module.exports = (value) => {
  const arr = value.split(':');
  const dec = parseInt((arr[1] / 6) * 10, 10);
  return parseFloat(`${parseInt(arr[0], 10)}.${(dec < 10 ? `0${dec}` : dec)}`);
};
