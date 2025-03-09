// href = "https://www.codewars.com/kata/57a0885cbb9944e24c00008e"

// Description:
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    let result = ''
    
    for(let i = 0; i < s.length; i++){
      if(s[i] != '!'){
        result += s[i]
      }
    }
    return result
  }