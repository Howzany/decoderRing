// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    //=========================================================================================
    //                                         Instructions:
    // The Caesar shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.
    // For example, if you were to "shift" the alphabet to the right by 3, the letter A would become D.
    // "thinkful" -> "wklqnixo"
    // When decoding the message, you need to know the number the original message was shifted by so that you can shift in the opposite direction.
    // caesar()
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
    //========================================================================================
    //                                      encoding strategy:
    //  I have no idea how to "shift" a letter into another letter... but I think I can try
    // creating an array with the alphabet inside 3 times, and shift from the middle one in any
    // direction to account for z and a wrapping
    // I can set the encode parameter to be true by default using default parameters technique
    // !!!!ASK A TA: "How do I use an array to shift a letter by the shift value using
    // the array index?"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //========================================================================================
    //                                      decoding strategy:
    // Knowing how to shift with encoding should help with coming up with the decoding strategy
    //========================================================================================
    //                                      wrapping past z towards a or a towards z:
    // So far I think that the best idea is to create an array with the alphabet written 3 times
    // and use the array index to account for the shift
    // Actually this might not work... if I use .find method to handle the punctuation and spaces
    // .find will use the first instance of a letter in the array which will screw this up
    //========================================================================================
    //                                      ignoring punctuation and spaces:
    // I may have to use a .find method on the array for all the letters that I am shifting and
    // for the spaces and punctuation, just return it as is by default without shifting.
    //========================================================================================
    //                                      handling false cases:
    // should return false if shift is 0, if shift is undefined, if shift is greater than 25,
    // if shift is less than -25.
    // I may have to take care of this separately as a series of if statements that returns false
    // before the encoding section
    //========================================================================================
    const shiftArray = [
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

    // ===================================================================================================
    //                                            Error Handling
    // Errors for things like shift being greater than 25 should make the function return false early.
    //====================================================================================================
    if (shift == 0 || shift > 25 || shift < -25 || shift === undefined) {
      return false;
    }

    let outputStringArray = [];

    // I just put the outputStringArray outside of the loop... it's probably what was causing problems.

    // console.log(shiftArray[26]); a
    // it can be said that shiftArray.length =  3x26 = 78
    // the second alphabet or the second "a" in shiftArray will begin with the index 26
    for (let i = 0; i < input.length; i++) {
      // ^ here I want to loop through the input in order to access each individual character in the message
      // in sequential order and do something to it, which is to shift it...
      // 'cat'.charAt(1) // gives value "a"  (from MDN String online)
      // input.charAt(i).toLowerCase() should loop us through the input one letter at a time.
      //=================================================================================================
      //                                    Assigning input characters an index value
      // I am unsure how to do this... because if I just try to use a .find, the .find will find the first
      // copy of the letter in the ShiftArray, which won't work well since I want to assign a as 26 initially
      // and then shift in whatever direction necessary.
      // In order to assign each letter in input an index number that matches the corresponding index of
      // shiftArray, I must first use a different array I think to assign the index number to the letter.
      // So I guess a new array is necessary, but this one must be 26 letters long.
      //=================================================================================================
      const letterIndexArray = [
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
      // AN ALTERNATIVE METHOD OF DOING THIS:
      // index = 25 shift = 1 newIndex 26 if(newIndex > 25) {newIndex - 26} a index is 0
      // [a,b,c]{a:1,b:2}
      // now a in letterIndexArray will have an index of 0 and z an index of 25.
      // I must now use letterIndexArray as I loop through the input to find the initial index
      // the initial index will be the index of letterIndexArray + 26 in the shiftArray
      // THEN I apply a shift to the shiftArray to reach the desired output letter.
      // *If you need the index of the found element in the array, use findIndex().* From MDN
      const shiftArrayIndex = letterIndexArray.indexOf(input.charAt(i).toLowerCase()) + 26;
      // ^ this determines the starting index of shiftArray we need in order to shift it
      // without concern for negative shifts going past a or positive shifts going past z
      //====================================================================================
      //                                    Actually applying the Shift
      // I think here I need to use foundIndex which I just got using the help of letterIndexArray
      // to then add or subtract based on the shift parameter. That might be the output...
      // But the problem here is how to then express the output...
      // I should make the new output be a string... and using "string".charAt(i) be the new
      // character.
      // BUUUUUT... would it be easier to output an array and then concat to make a big array
      // with all the individual characters as strings that contain 1 character.
      // THEN use .join to make it into one string as the final output??? hmmm
      //====================================================================================
      // let outputStringArray = [];
      // ^^ I might have to put this outside the scope of the loop... maybe...
      // Before I encode I need to make sure encode is true...
      if (encode === true) {
        //==================================================================================
        //                                  Accounting for special characters and spaces
        // it's a check that is an if statement then we push it just as is.
        // if(){}  where input.charAt(i).toLowerCase() does not have an index or character equivalent in the letterIndexArray
        // This should actually go in front of the outputStringArray.push line.
        //==================================================================================
        if (!letterIndexArray.includes(input.charAt(i).toLowerCase())) {
          outputStringArray.push(input.charAt(i).toLowerCase());
        }
        //NOW I put the character with the shift into the outputStringArray
        else {
          outputStringArray.push(shiftArray[shiftArrayIndex + shift]);
        }
        // with this I might not need to concat, but just need to use .join
        // at this point in the code, there is a loop that loops through input and puts a
        // new shifted letter or character into outputStringArray.
      } else if (encode === false) {
        //Now we do the decoding section here. Where we're now assuming the opposite of the shift.
        if (!letterIndexArray.includes(input.charAt(i).toLowerCase())) {
          outputStringArray.push(input.charAt(i).toLowerCase());
        }
        //This if is for special characters and spaces to be maintained.
        else {
          outputStringArray.push(shiftArray[shiftArrayIndex - shift]);
        }
        // with this the decoding is just the reverse order of shift so shift is minus. That said if there is an error
        // later in decoding, this line is the line to look at.
      }
    }
    //now that we're done with the for loop and outputStringArray is filled with characters from our input...
    // we need to return it as a string using .join
    return outputStringArray.join(``);
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
