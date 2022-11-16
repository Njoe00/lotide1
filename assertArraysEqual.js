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



assertArraysEqual([1, 2, 3], [1, 2, 3]);
