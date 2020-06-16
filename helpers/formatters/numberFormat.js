module.exports = (number, decimals, decPoint, thousandsSep) => {
  number = String(number).replace(/[^0-9+\-Ee.]/g, '');
  const n = !Number.isFinite(+number) ? 0 : +number;
  const prec = !Number.isFinite(+decimals) ? 0 : Math.abs(decimals);
  const sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep;
  const dec = (typeof decPoint === 'undefined') ? '.' : decPoint;
  let s = '';
  const toFixedFix = (innerN, innerPrec) => {
    const k = 10 ** innerPrec;
    return String((Math.round(innerN * k) / k).toFixed(innerPrec));
  };
  s = (prec ? toFixedFix(n, prec) : String(Math.round(n))).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
};
