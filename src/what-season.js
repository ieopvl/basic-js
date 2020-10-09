const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if ( !(date instanceof Date) || date.toString !== new Date(1990).toString)  throw new Error('THROWN');

  const month = new Date(date).getMonth();
  if (month >= 0 && month <= 1 || month === 11) return "winter";
  if (month >= 2 && month <= 4) return "spring";
  if (month >= 5 && month <= 7) return 'summer';
  return 'autumn';
};
