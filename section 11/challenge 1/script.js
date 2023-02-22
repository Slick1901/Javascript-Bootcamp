function checkDogs(dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice(1, -2);
  const dogs = [...dogsJuliaCorrected, ...dogsKate];
  dogs.forEach((dogAge, i) => {
    const dogType = dogAge >= 3 ? 'adult' : 'puppy';
    console.log(`Dog number ${i + 1} is a ${dogType}, and is ${dogAge} years old`);
  });
}
