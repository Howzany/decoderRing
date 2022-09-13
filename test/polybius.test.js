// Write your tests here!
// The polybius() function in the src/polybius.js file has two parameters:
//     input refers to the inputted text to be encoded or decoded.
//     encode refers to whether you should encode or decode the message. By default it is set to true.
// When building the function, keep the following constraints and rules in mind:
//     You are welcome to assume that no additional symbols will be included as part of the input. Only spaces and letters will be included.
//     When encoding, your output should still be a string.
//     When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.
//     Spaces should be maintained throughout.
//     Capital letters can be ignored.
//     The letters I and J share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown.
// Examples
// polybius("thinkful"); //> "4432423352125413"
// polybius("Hello world"); //> '3251131343 2543241341'
// polybius("3251131343 2543241341", false); //> "hello world"
// polybius("4432423352125413", false); //> "th(i/j)nkful

const { expect } = require("chai");
const { polybius } = require("../src/polybius");
// polybius("44324233521254134", false); //> false
describe("polybius", () => {
  it("should encode the message if encode is true", () => {
    // Steps for testing the function
    // input, encode
    const input = "agn";
    const encode = true;
    const expected = "112233";
    const actual = polybius(input, encode);
    expect(actual).to.equal(expected);
  });
  it("should decode the message if encode is false", () => {
    const input = "112233";
    const encode = false;
    const expected = "agn";
    const actual = polybius(input, encode);
    expect(actual).to.equal(expected);
  });
  it("should keep the spaces", () => {
    const input = "b a";
    const encode = true;
    const expected = "21 11";
    const actual = polybius(input, encode);
    expect(actual).to.deep.equal(expected);
  });
  it("should encode an output as a string", () => {
    const input = "ab";
    const encode = true;
    const expected = `string`;
    const actual = typeof polybius(input, encode);
    expect(actual).to.equal(expected);
  });
  it("both I and J can be coded into 42", () => {
    const input = "ij";
    const encode = true;
    const expected = "4242";
    const actual = polybius(input, encode);
    expect(actual).to.equal(expected);
  });
  it("42 should be decoded to show both I and J", () => {
    const input = "42";
    const encode = false;
    const expected = "(i/j)";
    const actual = polybius(input, encode);
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters", () => {
    const input = "CAP";
    const encode = true;
    const expected = "311153";
    const actual = polybius(input, encode);
    expect(actual).to.equal(expected);
  });
});
