const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');
const countOnly = require('./countOnly');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const countLetters = require('./countLetters')
const assertObjectsEqual = require('./assertObjectsEqual');

module.exports = {
    head,
    tail,
    middle,
    map,
    takeUntil,
    without,
    findKeyByValue,
    findKey: findKey,
    eqObjects,
    eqArrays,
    countOnly,
    assertArraysEqual,
    assertEqual,
    assertObjectsEqual,
    countLetters
};