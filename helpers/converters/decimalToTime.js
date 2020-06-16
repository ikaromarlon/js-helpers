module.exports = (value) => {
  const time = value * 60;
  const hours = Math.floor(time / 60);
  const minutes = `${Math.ceil(time % 60).toString()[0]}0`;
  return `${hours}:${minutes}`;
};
