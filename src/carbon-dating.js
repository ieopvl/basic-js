const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const times = sampleActivity / HALF_LIFE_PERIOD;

  const k = 0.693 / HALF_LIFE_PERIOD;

  const t = Math.ceil(Math.log10(times)/k)

  return t;
};
