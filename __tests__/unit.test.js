// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');
// TODO - Part 2
test('checks (858)284-7645 valid number', () => {
    expect(functions.isPhoneNumber("(858)284-7645")).toBe(true);
});

test('checks 858284-7645 valid number', () => {
    expect(functions.isPhoneNumber("858284-7645")).toBe(true);
});

test('checks 858284764 invalid number', () => {
    expect(functions.isPhoneNumber("858284764")).toBe(false);
});

test('checks 85828476456 is  invalid number', () => {
    expect(functions.isPhoneNumber("85828476456")).toBe(false);
});

test('Checking valid email', () => {
    expect(functions.isEmail('eliasarghand@gmail.com')).toBe(true);
});

test('Checking valid Education email with .edu', () => {
    expect(functions.isEmail('eliasarghand@ucsd.edu')).toBe(true);
});

test('Checking invalid Education email without the "."', () => {
    expect(functions.isEmail('eliasarghand@ucsdedu')).toBe(false);
});

test('Checking invalid Education email without the "@"', () => {
    expect(functions.isEmail('eliasarghandgmail.com')).toBe(false);
});

test('Checking password with 4 characters and first char is letter', () => {
    expect(functions.isStrongPassword('a123')).toBe(true);
});

test('Checking password with 15 characters and first char is letter and has underscore', () => {
    expect(functions.isStrongPassword('a1234567891234_')).toBe(true);
});

test('Testing 3 character password', () => {
    expect(functions.isStrongPassword('123')).toBe(false);
});

test('Testing 16 character password', () => {
    expect(functions.isStrongPassword('a1234567891234_6')).toBe(false);
});

test('Testing valid date 11/06/2001', () => {
    expect(functions.isDate('11/06/2001')).toBe(true);
});

test('Testing valid date 2/2/2001', () => {
    expect(functions.isDate('2/2/2001')).toBe(true);
});

test('Testing invalid date 2/233/2001', () => {
    expect(functions.isDate('2/233/2001')).toBe(false);
});

test('Testing invalid date 2//2001', () => {
    expect(functions.isDate('2//2001')).toBe(false);
});

test('Testing valid hexcolor', () => {
    expect(functions.isHexColor('#FF5733')).toBe(true);
});

test('Testing valid hexcolor #08235', () => {
    expect(functions.isHexColor('#08235E')).toBe(true);
});

test('Testing invalid hexcolor (short) #082', () => {
    expect(functions.isHexColor('#08')).toBe(false);
});

test('Testing invalid hexcolor (long) #ff00000', () => {
    expect(functions.isHexColor('#ff00000')).toBe(false);
});