// href = "https://www.codewars.com/kata/57a429e253ba3381850000fb"


// Description:
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    let calculateBMI = weight / (height * height);
    if (calculateBMI <= 18.5) {
      return 'Underweight';
    } else if (calculateBMI <= 25) {
      return 'Normal';
    } else if (calculateBMI <= 30) {
      return 'Overweight';
    } else if (calculateBMI > 30) {
      return 'Obese';
    }
  } 