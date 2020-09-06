function parse(val) {
  if (isNaN(val)) {
    return 0;
  }

  return Number(val);
}

function sum(val1, val2) {
  return parse(val1) + parse(val2);
}

module.exports = {
  sum,
};
