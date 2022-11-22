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
  
  
const without = function(source, itemToRemove) {
  const newSource = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemToRemove[i]) {
      newSource.push(source[i]);
    }
  }
  return newSource;
};
  
const words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse']);
assertArraysEqual(words, ['hello', 'world', 'lighthouse']);
  
assertArraysEqual(without([1, 2, 3], [1]), ([2, 3]));
assertArraysEqual(without(["1","2","3"], [1, 2, "3"]), (["1", "2"]));

module.exports = without;