'use sctrict';

class CodeBreaker {
  constructor(newSecret) {
    this.secret = newSecret;
  }

  setSecret(value) {
    this.secret = value;
  }

  guest(value) {
    let response = '';
    for (let i = 0; i < value.length; i++) {
      if (this.itExist(value[i])) {
        if (this.isPositioned(value[i], i)) {
          response = 'X' + response;
        } else {
          response = response + '_';
        }
      }
    }
    return response;
  }

  itExist(digit) {
    if (this.secret.includes(digit)) {
      return true;
    } else {
      return false;
    }
  }

  isPositioned(value, position) {
    if (this.secret[position] == value) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = CodeBreaker;
