// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    //   Polybius square
    //    1 	  2 	  3 	  4 	  5
    // 1 	A 	  B 	  C 	  D 	  E
    // 2 	F 	  G 	  H 	  I/J 	K
    // 3 	L 	  M 	  N 	  O 	  P
    // 4 	Q 	  R 	  S 	  T 	  U
    // 5 	V 	  W 	  X 	  Y 	  Z
    // The Polybius square is a cipher that is achieved by arranging a typical alphabet into a grid. Each letter is represented through a coordinate. For example, in the above table, the letter B would be represented by the numerical pair 21.
    // Typically, it is possible to arrange the letters however you like and read off the coordinates in whatever direction you like. In this example, the grid will be arranged as above and coordinates will be read by comparing the first digit to the number on the top of the table and the second digit to that on the left.
    // "thinkful" -> "4432423352125413"
    // When decoding the message, each pair of numbers is translated using the coordinates.
    // polybius()
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
    // polybius("44324233521254134", false); //> false
    //========================================================================================
    //                                     encoding strategy
    // I was thinking of putting the entire key of the polybius square inside an object with
    // key and value pairs where the key is the letter, and the value is the 2 digit code for that
    // letter. This would take some time to write out, but once done it can make my life easier
    //========================================================================================
    //                                     decoding strategy
    // The trick to this is going to be somehow being able to access the key when given the value
    // and I'm not 100% sure how to do that... maybe a deconstruction or has to do with the
    // Object.keys method of extracting the keys into an array?
    // Also, decoding a string of multiple numbers inside a string would require that my code
    // has to take each 2 number pair as a value to compare it to the object that I create.
    // !!!!!!!!!!ASK A TA: "How to account for every 2 letters within a string while looping?"
    // !!!!!!!!!!!!!! (note; Teddy explained it in Discord, check there... we basically do i+=2
    // and spaces will have to also have i - 1 situation to shift it back, and the `${x}${y}`
    // where x = input.i  and y = input.(i+1))
    //========================================================================================
    //                                      i/j situation
    // It seems like i and j needs to be returned from decoding into "(i/j)" as a string. The
    // problem that this causes is that if we put the entire polybius key into an object, the
    // object would require that both i and j be separate keys to code for "42" when encoding.
    // BUT when it decodes both i and j must return as "(i/j)", which means that a special exception
    // should be in the function with an if statement for "42" when decoding.
    //========================================================================================
    //                                   accounting for spaces
    // Spaces should be looped through just as every letter is looped through and turned into
    // their numbers, when the space is passed in it should be given a default value of space.
    //========================================================================================
    const encodeKey = {
      a: 11,
      b: 21,
      c: 31,
      d: 41,
      e: 51,
      f: 12,
      g: 22,
      h: 32,
      i: 42,
      j: 42,
      k: 52,
      l: 13,
      m: 23,
      n: 33,
      o: 43,
      p: 53,
      q: 14,
      r: 24,
      s: 34,
      t: 44,
      u: 54,
      v: 15,
      w: 25,
      x: 35,
      y: 45,
      z: 55,
    };
    const decodeKey = {
      11: "a",
      21: "b",
      31: "c",
      41: "d",
      51: "e",
      12: "f",
      22: "g",
      32: "h",
      42: "(i/j)",
      52: "k",
      13: "l",
      23: "m",
      33: "n",
      43: "o",
      53: "p",
      14: "q",
      24: "r",
      34: "s",
      44: "t",
      54: "u",
      15: "v",
      25: "w",
      35: "x",
      45: "y",
      55: "z",
    };
    //======================================================================
    //                                Encoding
    if (encode === true) {
      let encodedOutputMessage = "";
      let encodeLowered = input.toLowerCase();
      for (let i = 0; i < encodeLowered.length; i++) {
        if (encodeLowered[i] === " ") {
          encodedOutputMessage += encodeLowered[i];
          //This helps account for spaces
        } else {
          encodedOutputMessage += encodeKey[encodeLowered[i]];
        }
      }
      return encodedOutputMessage;
      // ======================================================================
      //                                Decoding
    } else if (encode === false) {
      let decodedOutputMessage = "";
      //================================================================
      //                          Error Handling
      if (!(input.split(` `).join(``).length % 2 === 0)) {
        //.split(` `).join(``) removes spaces... .length%2===0 checks for even
        return false;
      }
      //================================================================
      for (let i = 0; i < input.length; i += 2) {
        if (input[i] === " ") {
          decodedOutputMessage += input[i];
          i = i - 1;
          // A space is only 1 character not 2 like the number codes
          // so i= i - 1 helps reset the i += 2 loop for spaces
        } else {
          let firstDigit = input[i];
          let secondDigit = input[i + 1];
          let letterKey = `${firstDigit}${secondDigit}`;
          decodedOutputMessage += decodeKey[letterKey];
        }
      }
      return decodedOutputMessage;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
