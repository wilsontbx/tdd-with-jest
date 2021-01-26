const firstNonConsecutiveNumber = require("../src/firstNonConsecutiveNumber");

test("This should return 3", function () {
  expect(firstNonConsecutiveNumber([1, 3])).toEqual(3);
});

test("This should return 4", function () {
  expect(firstNonConsecutiveNumber([1, 2, 4, 5, 6])).toEqual(4);
});

test("This should return -10", function () {
  expect(firstNonConsecutiveNumber([-1, 0, 1, -10])).toEqual(-10);
});

test("This should return null", function () {
  expect(firstNonConsecutiveNumber([1, 2, 3, 4, 5, 6])).toEqual(null);
});

test("This should return null", function () {
  expect(firstNonConsecutiveNumber([])).toEqual(null);
});
