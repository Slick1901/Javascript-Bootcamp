const input = document.querySelector('#input');
const button = document.querySelector('#btn');

button.addEventListener('click', function() {
  const words = input.value.split('\n');
  for (let i = 0; i < words.length; i++) {
    const word = words[i].trim().toLowerCase();
    const parts = word.split('_');
    let camelCase = parts[0];
    for (let j = 1; j < parts.length; j++) {
      camelCase += parts[j][0].toUpperCase() + parts[j].slice(1);
    }
    console.log(camelCase.padEnd(20, ' ') + '✅'.repeat(i + 1));
  }
});
