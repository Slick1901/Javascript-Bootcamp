function calcAverageHumanAge(ages) {
  const humanAges = ages.map(dogAge => {
    if (dogAge <= 2) {
      return 2 * dogAge;
    } else {
      return 16 + dogAge * 4;
    }
  });
  
  const adults = humanAges.filter(age => age >= 18);

  const avgAge = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  
  return avgAge;
}

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

console.log(calcAverageHumanAge(data1)); // Output: 44
console.log(calcAverageHumanAge(data2)); // Output: 47.333333333333336
