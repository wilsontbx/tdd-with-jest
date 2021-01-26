const findMultiples = require("../src/findMultiples");

test("This should return array 2,4,6", function () {
  expect(findMultiples(2, 6)).toEqual([2, 4, 6]);
});
