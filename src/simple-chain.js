const CustomError = require("../extensions/custom-error");

const chainMaker = {

  result: [],

  getLength() {
    return this.result.length;
  },
  addLink(value = '') {
    this.result.push(String(value));
    return this;
  },
  removeLink(position) {
    if (isNaN(position - 1) && !isFinite(position - 1)) {
      this.result = [];
      throw new Error('THROWN');
    }
    if ( position - 1 > this.getLength() - 1 || position - 1 < 0) {
      this.result = [];
      throw new Error('THROWN')
    }

    this.result.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.result = this.result.reverse();
    return this;
  },
  finishChain() {
    const chain = this.result.map(item => `~~( ${item} )`).join('').slice(2);
    this.result = [];
    return chain;
  }
};

module.exports = chainMaker;
