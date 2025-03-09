// href = "https://www.codewars.com/kata/56b1f01c247c01db92000076"

// Description:
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

function doubleChar(str) {
    // Your code here
    let newStr = '';
    for(let i=0; i<str.length; i++){
      newStr += str[i] + str[i];
    }
    return newStr;
  }
  