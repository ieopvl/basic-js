const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if ( typeof sampleActivity !== 'string') return false;
  sampleActivity = Number(sampleActivity);
  if (isNaN(sampleActivity)) return false;
  if (sampleActivity <= 0 || sampleActivity > 15) return false;

  const times = Number(sampleActivity) / MODERN_ACTIVITY;

  const k = 0.693 / HALF_LIFE_PERIOD;

  const t = Math.round(Math.log(times)/k)

  return Math.abs(Math.ceil(t));
};
