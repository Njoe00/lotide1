const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    return console.log(`✅ Arrays are equal: ${arr1} === ${arr2}`);
  }
  return console.log(`🛑 Arrays are not equal: ${arr1} !== ${arr2}`);
};
  

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
