module.exports = (value, toReplace, replaceWith) => value.replace(new RegExp(`${toReplace}([^${toReplace}]*)$`, 'gm'), `${replaceWith}$1`);
