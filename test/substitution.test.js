// Write your tests here!
// The substitution() function in the src/substitution.js file has three parameters:
//     input refers to the inputted text to be encoded or decoded.
//     alphabet refers to substitution alphabet.
//     encode refers to whether you should encode or decode the message. By default it is set to true.
// When building the function, keep the following constraints and rules in mind:
//     The input could include spaces and letters as well as special characters such as #, $, *, etc.
//     Spaces should be maintained throughout.
//     Capital letters can be ignored.
//     The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.
//     All the characters in the alphabet parameter must be unique. Otherwise, it should return false.
// Examples
// substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
// substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'
// substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); //> 'thinkful'
// substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"); //> "y&ii$r&"
// substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> "message"
// substitution("thinkful", "short"); //> false
// substitution("thinkful", "abcabcabcabcabcabcabcabcyz"); //> false

const { expect } = require("chai");
const { substitution } = require("../src/substitution");
describe("substitution", () => {
  it("should substitute input with alphabet if encode is true", () => {
    // Steps for testing the function
    //input, alphabet, encode
    const input = "ab";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const encode = true;
    const expected = "xo";
    const actual = substitution(input, alphabet, encode);
    expect(actual).to.equal(expected);
  });
  it("should decode the input using alphabet to find original code if encode is false", () => {
    const input = "jrufscpw";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const encode = false;
    const expected = "thinkful";
    const actual = substitution(input, alphabet, encode);
    expect(actual).to.equal(expected);
  });
  it("should include spaces and letters as well as special characters such as $, *, #, etc.", () => {
    const input = "%You are an excellent spy!";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const encode = true;
    const expected = "%elp xhm xf mbymwwmfj dne!";
    const actual = substitution(input, alphabet, encode);
    expect(actual).to.deep.equal(expected);
  });
  it("spaces should be maintained", () => {
    const input = "space here";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const encode = true;
    const expected = "dnxym rmhm";
    const actual = substitution(input, alphabet, encode);
    expect(actual).to.deep.equal(expected);
  });
  it("capital letters can be ignored", () => {
    const input = "CAP";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const encode = true;
    const expected = "yxn";
    const actual = substitution(input, alphabet, encode);
    expect(actual).to.equal(expected);
  });
  it("alphabet parameter must be exactly 26 characters or the function returns false", () => {
    const input = "a";
    const alphabet = "xoyqmcgrukswaflnthdjpzibevwer";
    const encode = true;
    const expected = false;
    const actual = substitution(input, alphabet, encode);
    expect(actual).to.equal(expected);
  });
  it("all characters in the alphabet parameter must be unique. Otherwise it should return false.", () => {
    const input = "a";
    const alphabet = "xoyqmcgrukswaflnthdjpzibex";
    const encode = true;
    const expected = false;
    const actual = substitution(input, alphabet, encode);
    expect(actual).to.equal(expected);
  });
});
