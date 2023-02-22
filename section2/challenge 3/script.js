
let dolphins_score = [96, 108, 89];
let koalas_score = [88, 91, 110];

let dolphins_average = (dolphins_score.reduce((acc, cur) => acc + cur, 0)) / dolphins_score.length;
let koalas_average = (koalas_score.reduce((acc, cur) => acc + cur, 0)) / koalas_score.length;

if (dolphins_average > koalas_average && dolphins_average >= 100) {
  console.log(`Dolphins win with an average score of ${dolphins_average}`);
} else if (koalas_average > dolphins_average && koalas_average >= 100) {
  console.log(`Koalas win with an average score of ${koalas_average}`);
} else if (dolphins_average === koalas_average && dolphins_average >= 100 && koalas_average >= 100) {
  console.log(`Both teams draw with an average score of ${dolphins_average}`);
} else {
  console.log(`No one wins the trophy`);
}


dolphins_score = [97, 112, 101];
koalas_score = [109, 95, 123];

dolphins_average = (dolphins_score.reduce((acc, cur) => acc + cur, 0)) / dolphins_score.length;
koalas_average = (koalas_score.reduce((acc, cur) => acc + cur, 0)) / koalas_score.length;

if (dolphins_average > koalas_average && dolphins_average >= 100) {
  console.log(`Dolphins win with an average score of ${dolphins_average}`);
} else if (koalas_average > dolphins_average && koalas_average >= 100) {
  console.log(`Koalas win with an average score of ${koalas_average}`);
} else if (dolphins_average === koalas_average && dolphins_average >= 100 && koalas_average >= 100) {
  console.log(`Both teams draw with an average score of ${dolphins_average}`);
} else {
  console.log(`No one wins the trophy`);
}


dolphins_score = [97, 112, 101];
koalas_score = [109, 95, 106];

dolphins_average = (dolphins_score.reduce((acc, cur) => acc + cur, 0)) / dolphins_score.length;
koalas_average = (koalas_score.reduce((acc, cur) => acc + cur, 0)) / koalas_score.length;

if (dolphins_average > koalas_average && dolphins_average >= 100) {
  console.log(`Dolphins win with an average score of ${dolphins_average}`);
} else if (koalas_average > dolphins_average && koalas_average >= 100) {
  console.log(`Koalas win with an average score of ${koalas_average}`);
} else if (dolphins_average === koalas_average && dolphins_average >= 100 && koalas_average >= 100) {
  console.log(`Both teams draw with an average score of ${dolphins_average}`);
} else {
  console.log(`No one wins the trophy`);
}
