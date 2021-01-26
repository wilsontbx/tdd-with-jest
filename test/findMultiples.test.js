const findMultiples = require("../src/findMultiples");

test("This should return array 2,4,6", function () {
  expect(findMultiples(2, 6)).toEqual([2, 4, 6]);
});

test("This should return array 3,6,9", function () {
  expect(findMultiples(3, 10)).toEqual([3, 6, 9]);
});

test("This should return array 5", function () {
  expect(findMultiples(5, 6)).toEqual([5]);
});
