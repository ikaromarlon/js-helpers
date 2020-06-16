module.exports = (obj, path) => {
  const get = (innerObj, prop, ...props) => {
    if (!innerObj) return null;
    const value = innerObj[prop];
    if (!props.length || !value) return value;
    return get(value, ...props);
  };
  return get(obj, ...((path || '').replace(/\[/g, '.').replace(/\]/g, '').split('.')));
};
