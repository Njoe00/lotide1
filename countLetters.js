const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

  
const countLetters = function(string) {
  const results = {};
  for (let letter of string) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};


assertEqual(countLetters("LHL").L,2);
