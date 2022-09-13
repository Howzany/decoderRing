// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    //     Substitution cipher
    // image.png
    // The substitution cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the standard alphabet. This cipher requires that the recipient have the substitution alphabet, otherwise it will be difficult for them to decode the message.
    // For example, in the image above, the word HELLO would be translated as follows:
    //     H becomes R.
    //     E becomes M.
    //     L becomes W.
    //     O becomes L.
    // This would result in the code RMWWL. To decrypt this code, you would simply take the result and transpose back from the substitution alphabet to the standard alphabet.
    // substitution()
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
    //========================================================================================
    //                                    encoding strategy
    // The code in the function should create an array where the alphabet parameter is placed
    // inside the array, then the array index will be how we look up the letter and compare it
    // against another array which is the regular alphabet array. This way the array index is
    // what we will be comparing and using to access the value from one array and then encoding
    // or decoding using the same index but for the other array. So there will be 2 separate arrays
    // where each of the 2 arrays are exactly 26 letters. WHEN alphabet is passed in, we will use
    // string toCharArray() to create that array so that the keys will match up with the normalAlphabetArray
    //========================================================================================
    //                                    decoding strategy
    // Decoding is fairly straight forward as we just use the 2 arrays differently where we start
    // with the input and the alphabet, and since encoding is false, we will look at the alphabet
    // or I suppose the alphabetArray first. SO we loop through the input letter by letter, and
    // then for each letter, we find the array index from alphabetArray and then use that index
    // on normalAlphabetArray to find the decoded letter.
    //========================================================================================
    //                                    alphabet length
    // We can probably use array.length and an if statement with
    //  if (alphabetArray.length < 26 || alphabetArray.length > 26) to make
    // the function return false at the beginning of the function before any encoding occurs.
    //========================================================================================
    //                                    alphabet uniqueness
    // I am really unsure how to do this!
    // !!!!!!!! const askATA = "How do I check a string of alphabet for uniqueness?" !!!
    // MAYBE there's a very very awkward way... involving... using encode or decode process
    // to make a third array, in which we use .filter on the alphabetArray that we are creating
    // to pull out every individual letter and LOOP that for all 26 letters... and if any of those
    // result in a filteredArray.length > 1, then we return false... but this would occur 26
    // times as we loop through each letter in the alphabetArray to create 26 arrays and check
    // each array for length... Is this really the way?
    //========================================================================================
    //                                     Special Letters and Spaces
    // There has to be a default setting where if there is no .find in the array during the
    // encoding process and thusly there is no index value, then the input character which can be
    // a space or a special letter will be kept as is.
    //========================================================================================

    // SO I need to test the parameter alphabet first and see if it should just return false at the
    // beginning of the function
    if (!alphabet) {
      return false;
    }
    // if there's no alphabet key provided it should return false
    if (!(alphabet.length === 26)) {
      return false;
    }
    // if alphabet key is not exactly 26 letters, then it should return false.
    for (i = 0; i < alphabet.length; i++) {
      for (j = 0; j < alphabet.length; j++) {
        if (alphabet[i] == alphabet[j] && !(i === j)) {
          return false;
        }
      }
    }
    // if there are duplicate letters within the alphabet key then it should return false.
    const normalAlphabetArray = [
      `a`,
      `b`,
      `c`,
      `d`,
      `e`,
      `f`,
      `g`,
      `h`,
      `i`,
      `j`,
      `k`,
      `l`,
      `m`,
      `n`,
      `o`,
      `p`,
      `q`,
      `r`,
      `s`,
      `t`,
      `u`,
      `v`,
      `w`,
      `x`,
      `y`,
      `z`,
    ];
    // This one is the normal alphabet put into an array and used for indexing
    const alphabetArray = alphabet.toLowerCase().split("");
    // console.log(alphabetArray)
    // we just put the alphabet string parameter into an array so that each
    // character can be used for indexing purposes.
    const outputStringArray = [];
    // this is what we will be pushing individual characters into for decoding or
    // encoding purposes, and then using .join to return the final output string.
    for (i = 0; i < input.length; i++) {
      //and now we loop through the input string to encode or decode as needed.
      if (encode === true) {
        //this is the part where we encode
        let encodeCharacterIndex = normalAlphabetArray.indexOf(
          input.charAt(i).toLowerCase()
          // using the normal alphabet array to find the index of the character being looped
        );
        if (encodeCharacterIndex === -1) {
          outputStringArray.push(input.charAt(i));
        }
        // if that index is undefined it is probably a space or a special character.
        // in that case we just want to push the character directly from the input into outputStringArray.
        outputStringArray.push(alphabetArray[encodeCharacterIndex]);
        // otherwise we push the corresponding encoded letter from alphabetArray into the outputStringArray.
      } else if (encode === false) {
        // here is where the decoding portion starts...
        let decodeCharacterIndex = alphabetArray.indexOf(
          input.charAt(i).toLowerCase()
        );
        // since we're assuming the decoding is an encrypted message we need to use the alphabet key to find the
        // encoded message's correct letter index.
        if (decodeCharacterIndex === -1) {
          outputStringArray.push(input.charAt(i));
        }
        // again if undefined at the index that means it is a special character that we need to just push as is.
        outputStringArray.push(normalAlphabetArray[decodeCharacterIndex]);
        // if not a special character then we decode it by using the index and comparing it to a normalAlphabet letter in
        // normalAlphabetArray to then push the decoded letter into the outputStringArray.
      }
    }
    return outputStringArray.join(``);
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
