for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i+1}: ${player}`);
}
let sumOdds = 0;
for (const odd of Object.values(game.odds)) {
  sumOdds += odd;
}
const avgOdd = sumOdds / Object.values(game.odds).length;
console.log(`Average odd: ${avgOdd}`);
for (const [team, odd] of Object.entries(game.odds)) {
  const teamName = team === 'x' ? 'draw' : game[team];
  console.log(`Odd of victory ${teamName}: ${odd}`);
}
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
