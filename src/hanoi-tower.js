const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 3;

  if (disksNumber !== 2) {

    while(disksNumber > 2) {
      disksNumber -= 1;
      turns += Math.pow(2, disksNumber);
    }

  }

  let seconds = Math.floor((turns * 60 * 60) / turnsSpeed);

  return {turns, seconds}
};



