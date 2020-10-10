const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) throw new Error("THROWN");

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const prev = arr[i - 1];
    const next = arr[i + 1];

    if (current === '--discard-next') {
      if(next === undefined) break;
      i += 1;
    } else if (current === '--discard-prev') {
      if(arr[i - 2] === '--discard-next') continue
      result.pop();
    } else if (current === '--double-next') {
      if(next === undefined) break;
      result.push(next);
    } else if (current === '--double-prev') {
      if(arr[i - 2] === '--discard-next') continue
      if(prev === undefined) continue;
      result.push(prev);
    } else {
      result.push(current);
    }

  }

  return result;
};