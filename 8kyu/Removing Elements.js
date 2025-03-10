// href = "https://www.codewars.com/kata/5769b3802ae6f8e4890009d2"

// Description:
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
    let newArr = []
    
    for (i = 0; i < arr.length; i += 2) {
      newArr.push(arr[i])
    }
    return newArr
  }
  