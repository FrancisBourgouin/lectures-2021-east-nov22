const round = (value, roundness) => {
  const divider = Math.pow(10, roundness);

  return Math.round(value * divider) / divider;
};

module.exports = { round };
