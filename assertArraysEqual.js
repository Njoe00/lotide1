const eqArrays = require("./eqArrays");

const assertArraysEqual = function(expected, actual) {
  if (eqArrays(expected, actual)) {
    console.log(`✅ Assertion Passed: ${expected} === ${actual}`);
    return;
  }
  console.log(`🛑 Assertion Failed: ${expected} !== ${actual}`);
  return;
};

module.exports = assertArraysEqual;
