
let markMass1 = 78; // kg
let markHeight1 = 1.69; // m
let johnMass1 = 92; // kg
let johnHeight1 = 1.95; // m


let markMass2 = 95; // kg
let markHeight2 = 1.88; // m
let johnMass2 = 85; // kg
let johnHeight2 = 1.76; // m

// BMI calculation function
function calculateBMI(mass, height) {
  return mass / (height ** 2);
}

// Compare BMIs
let markBMI1 = calculateBMI(markMass1, markHeight1);
let johnBMI1 = calculateBMI(johnMass1, johnHeight1);
let markHigherBMI1 = markBMI1 > johnBMI1;

let markBMI2 = calculateBMI(markMass2, markHeight2);
let johnBMI2 = calculateBMI(johnMass2, johnHeight2);
let markHigherBMI2 = markBMI2 > johnBMI2;

// Output
if (markHigherBMI1) {
  console.log(`Data 1 - Mark's BMI (${markBMI1}) is higher than John's (${johnBMI1})!`);
} else {
  console.log(`Data 1 - John's BMI (${johnBMI1}) is higher than Mark's (${markBMI1})!`);
}

if (markHigherBMI2) {
  console.log(`Data 2 - Mark's BMI (${markBMI2}) is higher than John's (${johnBMI2})!`);
} else {
  console.log(`Data 2 - John's BMI (${johnBMI2}) is higher than Mark's (${markBMI2})!`);
}

