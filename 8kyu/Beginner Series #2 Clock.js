// href = "https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a"

// Description:
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s){
    //#Happy Coding! ^_^
      let miliSeconds = s * 1000
      let miliMinutes = m * 60000
      let miliHours = h * 3600000
  
   return miliSeconds + miliMinutes + miliHours
  }