// href = "https://www.codewars.com/kata/5a2be17aee1aaefe2a000151"

// Description:
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.


function arrayPlusArray(arr1, arr2) {
  
  let arr1Sum = 0
  let arr2Sum = 0
  let sumTotal = 0
  
  for(let i=0; i < arr1.length; i++){
    arr1Sum += arr1[i]
  }
  for(let j=0; j < arr2.length; j++){
    arr2Sum += arr2[j]
  }
  
  return sumTotal = (arr1Sum + arr2Sum); //something went wrong
}

