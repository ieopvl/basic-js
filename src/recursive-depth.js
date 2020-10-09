const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {

    return arr.reduce((accum, current) => {
      return Array.isArray(current) ? Math.max(this.calculateDepth(current, depth + 1), accum) : accum;
    }, depth);

  }

};




