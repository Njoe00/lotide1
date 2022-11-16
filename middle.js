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


const middle = function(arr) {
  let middleNum = Math.ceil(arr.length / 2);
  let middleNum1 = Math.floor(arr[arr.length / 2]);
  let holder = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.length <= 2) {
      return holder;
    }
    if (arr.length % 2 === 0) {
      holder.push(middleNum);
      holder.push(middleNum1);
      return holder;
    } else if (arr.length % 1 === 0) {
      return middleNum;
    }
  }
};
  
assertArraysEqual(middle([1]),([]));
assertArraysEqual(middle([1, 2]), ([]));
assertArraysEqual(middle([1, 2, 3, 4]), ([2, 3]));
assertArraysEqual(middle([1, 2, 3, 4, 5]),(3));

  
//   assertArraysEqual([1, 2, 3], [1, 2, 3]);
  