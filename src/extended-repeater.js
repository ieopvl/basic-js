const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
  let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator }  = options;
  repeatTimes = repeatTimes || 1;
  separator = separator || '+';
  addition = addition === undefined ? '' : String(addition);
  additionRepeatTimes = additionRepeatTimes || 1;
  additionSeparator = additionSeparator || '|'


  return (separator + str + (additionSeparator + addition)
          .repeat(additionRepeatTimes)
          .slice(additionSeparator.length))
          .repeat(repeatTimes)
          .slice(separator.length);
};