// href = "https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3"

// Description:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    let splitName = name.split(' ');
    let  firstName = splitName[0].charAt(0).toUpperCase()
    let lastName = splitName[1].charAt(0).toUpperCase()
    return `${firstName}.${lastName}`
   }
  
  // function abbrevName(name){
  //   let splitName = name.split(' ');
  //   return splitName[0].charAt(0).toUpperCase() + '.' + splitName[1].charAt(0).toUpperCase();
  // }