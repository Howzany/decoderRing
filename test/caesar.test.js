// Write your tests here!
// The caesar() function in the src/caesar.js file has three parameters:
//     input refers to the inputted text to be encoded or decoded.
//     shift refers to how much each letter is "shifted" by. A positive number means shifting to the right (i.e., A becomes D) whereas a negative number means shifting to the left (i.e., M becomes K).
//     encode refers to whether you should encode or decode the message. By default it is set to true.
// When building the function, keep the following constraints and rules in mind:
//     If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false.
//     Spaces should be maintained throughout, as should other nonalphabetic symbols.
//     Capital letters can be ignored.
//     If a letter is shifted so that it goes "off" the alphabet (e.g., a shift of 3 on the letter z), it should wrap around to the front of the alphabet (e.g., z becomes c).
// Examples
// caesar("thinkful", 3); //> 'wklqnixo'
// caesar("thinkful", -3); //> 'qefkhcri'
// caesar("wklqnixo", 3, false); //> 'thinkful'
// caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
// caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'
// caesar("thinkful"); //> false
// caesar("thinkful", 99); //> false
// caesar("thinkful", -26); //> false

const { expect } = require("chai");
const { caesar } = require("../src/caesar");
// a mocha and chai test look like this:
// const expect = require("chai").expect;
// const findStudentScoreByName = require("../src/solution");

// describe("findStudentScoreByName", () => {
//   it("should return the score for the student", () => {
//     const students = [
//       { name: "Leo Yeon-Joo", score: 8.9 },
//       { name: "Morgan Sutton", score: 7.4 },
//       { name: "Natalee Vargas", score: 9.2 },
//     ];
//     const studentName = "Morgan Sutton";
//     const expected = 7.4;
//     const actual = findStudentScoreByName(students, studentName);
//     expect(actual).to.equal(expected);
//   });
//   it("it should return null for an incorrect name", () => {
//     const notAnActualName = `SomeoneNotNamed`;
//     const students = [
//       { name: "Leo Yeon-Joo", score: 8.9 },
//       { name: "Morgan Sutton", score: 7.4 },
//       { name: "Natalee Vargas", score: 9.2 },
//     ];
//     const expected = null;
//     const actual = findStudentScoreByName(students, notAnActualName);
//     expect(actual).to.equal(expected);
//   });
// });

describe("caesar", () => {
  it("should encode the input if encode is true", () => {
    // Steps for testing the function
    //input, shift, encode
    const input = "a";
    const shift = 1;
    const encode = true;
    const expected = "b";
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);
  });
  it("should encode by default if encode is not given", () => {
    const input = "b";
    const shift = -1;
    const expected = "a";
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });
  it("should decode the input if encode is false", () => {
    const input = "b";
    const shift = 1;
    const encode = false;
    const expected = "a";
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);
  });
  it("should return false if shift is undefined", () => {
    const input = "a";
    const shift = undefined;
    const encode = true;
    const expected = false;
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);
  });
  it("should return false if shift is equal to 0", () => {
    const input = "b";
    const shift = 0;
    const encode = true;
    const expected = false;
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);
  });
  it("should return false if shift is less than -25", () => {
    const input = "a";
    const shift = -26;
    const encode = true;
    const expected = false;
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);
  });
  it("should return false if shift is greater than 25", () => {
    const input = "meow";
    const shift = 26;
    const encode = true;
    const expected = false;
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);
  });
  it("spaces should be maintained throughout as well as punctuation", () => {
    const input = "its, hers, and his stuff!";
    const shift = 1;
    const encode = true;
    const expected = "jut, ifst, boe ijt tuvgg!";
    const actual = caesar(input, shift, encode);
    expect(actual).to.deep.equal(expected);
  });
  it("it should wrap around the alphabet when the letters get shifted past z", () => {
    const input = "z";
    const shift = 1;
    const encode = true;
    const expected = "a";
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);
  });
  it("it should wrap around the alphabet when the letters get shifted past a in negative direction", () => {
    const input = "a";
    const shift = -1;
    const encode = true;
    const expected = "z";
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);
  });
  it("capital letters can be ignored", () => {
    const input = "AbCDe";
    const shift = 1;
    const encode = true;
    const expected = "bcdef";
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);
  });
});
