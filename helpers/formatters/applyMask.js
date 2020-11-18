module.exports = (mask, value) => {
  const arr = [...String(value)];
  return mask.replace(/x/g, () => arr.shift());
};
