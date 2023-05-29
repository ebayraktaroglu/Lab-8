// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// test isPhoneNumber
test('valid phone number', () => {
  expect(functions.isPhoneNumber("(353)-353-2356")).toBeTruthy();
});
test('valid phone number', () => {
  expect(functions.isPhoneNumber("(113)-383-3754")).toBeTruthy();
});
test('invalid phone number', () => {
  expect(functions.isPhoneNumber("(eee)-eer-gexe")).toBeFalsy();
});
test('invalid phone number', () => {
  expect(functions.isPhoneNumber("not a phone number")).toBeFalsy();
});

// test isEmail
test('valid email', () => {
  expect(functions.isEmail("callumhunt@gmail.com")).toBeTruthy();
});
test('valid email', () => {
  expect(functions.isEmail("skywalkerluke@yahoo.com")).toBeTruthy();
});
test('invalid email', () => {
  expect(functions.isEmail("red.com")).toBeFalsy();
});
test('invalid email', () => {
  expect(functions.isEmail("bob@gmail")).toBeFalsy();
});

// test isStrongPassword
test('valid strong password', () => {
  expect(functions.isStrongPassword("Q433E94J9838")).toBeTruthy();
});
test('valid strong password', () => {
  expect(functions.isStrongPassword("h_1a_jgo39_")).toBeTruthy();
});
test('invalid strong password', () => {
  expect(functions.isStrongPassword("Bf")).toBeFalsy();
});
test('invalid strong password', () => {
  expect(functions.isStrongPassword("p$%&*")).toBeFalsy();
});

// test isDate
test('valid date', () => {
  expect(functions.isDate("3/4/2020")).toBeTruthy();
});
test('valid date', () => {
  expect(functions.isDate("11/18/1998")).toBeTruthy();
});
test('invalid date', () => {
  expect(functions.isDate("1/3/203")).toBeFalsy();
});
test('invalid date', () => {
  expect(functions.isDate("e/gb/esgc")).toBeFalsy();
});


// test isHexColor
test('valid hex color', () => {
  expect(functions.isHexColor("884dff")).toBeTruthy();
});
test('valid hex color', () => {
  expect(functions.isHexColor("#b63")).toBeTruthy();
});
test('invalid hex color', () => {
  expect(functions.isHexColor("#abcd")).toBeFalsy();
});
test('invalid hex color', () => {
  expect(functions.isHexColor("a")).toBeFalsy();
});
