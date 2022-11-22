const words = ["ground", "control", "to", "major", "tom"];

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
  
const assertArraysEqual = function(expected, actual) {
  if (eqArrays(expected, actual)) {
    console.log(`✅ Assertion Passed: ${expected} === ${actual}`);
    return;
  }
  console.log(`🛑 Assertion Failed: ${expected} !== ${actual}`);
  return;
};
  
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words, word => word.length);
console.log(results2);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);

const results3 = map(words, word => word[0] !== 't');
console.log(results3);
assertArraysEqual(results3, [true, true, false, true, false]);

const results4 = map(words, word => (word.length > 4));
console.log(results4);
assertArraysEqual(results4, [ true, true, false, true, false ]);

module.exports = map;