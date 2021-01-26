const account = require("../src/account");

test("This should return 500", function () {
  expect(account.getBalance()).toEqual(500);
});

test("This should return 5500", function () {
  expect(account.deposit(5000)).toEqual(5500);
});

test("This should return 5500", function () {
  expect(account.deposit(1000)).toEqual(5500);
});

test("This should return 0", function () {
  expect(account.withdraw(5500)).toEqual(0);
});

test("This should return 0", function () {
  expect(account.withdraw(500)).toEqual(0);
});
