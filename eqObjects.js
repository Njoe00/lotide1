const assertEqual = function (actual, expected) {
    if (actual === expected) {
        return console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    }
    return console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function (arr1, arr2) {
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

const eqObjects = function (obj1, obj2) {
for (key in obj1) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        if (!eqArrays(obj1[key], obj2[key])) {
            return false;
        }
    } else {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
}
    return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);
 
const cd2 = {c: "1", d: ["2", 3, 4]};
assertEqual(eqObjects(cd, cd2), false);