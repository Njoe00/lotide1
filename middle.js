const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

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
  
module.exports = middle;