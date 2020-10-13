const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(isDirect = true) {
    this.isDirect = isDirect || false;
    this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.vigenereTable = this._makeVigenereTableFromChars(this.chars);
    this.startCode = 65;
    this.endCode = 90;
  }

  _padStrByKey(str, key) {
    let padded = '';
    let keyIndex = 0;
    let strIndex = 0;

    while (padded.length < str.length) {
      const charCode = str[strIndex].charCodeAt();

      if ( charCode >= this.startCode && charCode <= this.endCode) {
        padded += key[keyIndex];
      } else {
        padded += str[strIndex];
        keyIndex -= 1;
      }

      if (keyIndex === key.length - 1) {
        keyIndex = 0;
      } else {
        keyIndex += 1;
      }

      strIndex += 1;
    }

    return padded;
  }

  _makeVigenereTableFromChars(chars) {
    const table = [];

    for (let i = 0; i < chars.length; i++) {
      table.push(chars.slice(i) + chars.slice(0, i));
    }

    return table;
  }

  encrypt(str, key) {
    str = str.toUpperCase();
    key = key.toUpperCase();

    const padded = this._padStrByKey(str, key);
    let encrypted = '';

    for (let i = 0; i < str.length; i++) {

      const x = this.chars.indexOf(str[i]);
      const y = this.chars.indexOf(padded[i]);

      const encryptedChar = x >= 0 && y >= 0 ? this.vigenereTable[x][y] : str[i];

      encrypted += encryptedChar;
    }

    return encrypted;
  }

  decrypt(str, key) {

  }


}

module.exports = VigenereCipheringMachine;
