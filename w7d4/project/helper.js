const basicRound = (value) => {
  if (typeof value !== "number") {
    return NaN;
  }
  return Math.round(value);
};

const round = (params) => {
  const { value, price, symbol } = params;

  if (typeof value !== "number") {
    return NaN;
  }
  let output = "";
  if (price) {
    output = Math.round(value * 100) / 100;
  } else {
    output = Math.round(value);
  }

  if (symbol) {
    output += symbol;
  }

  return output;
};

module.exports = { basicRound, round };
