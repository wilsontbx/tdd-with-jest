const sumWithoutHighestAndLowest = require("../src/sumWithoutHighestAndLowest.js");

// test cases
test("first is 16", function () {
  expect(sumWithoutHighestAndLowest([6, 2, 1, 8, 10])).toEqual(16);
});

test("second is 5", function () {
  expect(sumWithoutHighestAndLowest([1, 1, 11, 2, 3])).toEqual(5);
});

test("third is 0", function () {
  expect(sumWithoutHighestAndLowest([1, 1, 11, 1, 11])).toEqual(0);
});

test("empty is 0", function () {
  expect(sumWithoutHighestAndLowest([])).toEqual(0);
});
