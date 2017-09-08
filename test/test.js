const { assert: { equal, deepEqual, notEqual, isFunction, isObject, isNumber } } = require('chai');
const { add, subtract, multiply, divide } = require('../calculator.js');

describe('add', () => {
    it('should be a function', () => {
      isFunction(add);
    });
    it('should return a number', () => {
        isNumber(add);
    });
  });

describe('subtract', () => {
    it('should be a function', () => {
      isFunction(subtract);
    });
  });

describe('multiply', () => {
    it('should be a function', () => {
      isFunction(multiply);
    });
  });
  
describe('divide', () => {
    it('should be a function', () => {
      isFunction(divide);
    });
  });