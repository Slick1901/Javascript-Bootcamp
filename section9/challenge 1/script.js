
const players1 = ['Neuer', 'Pavard', 'Süle', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Gnabry', 'Müller', 'Coman', 'Lewandowski'];
const players2 = ['Oblak', 'Trippier', 'Savic', 'Felipe', 'Renan Lodi', 'Koke', 'Saúl', 'Thomas', 'João Félix', 'Correa', 'Diego Costa'];
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
const {team1, x: draw, team2} = game.odds;
function printGoals(...playerNames) {
  console.log(`${playerNames.length} goals were scored`);
  for (const player of playerNames) {
    console.log(player);
  }
}

team1 < team2 && console.log(`Team 1 is more likely to win`);
team2 < team1 && console.log(`Team 2 is more likely to win`);
