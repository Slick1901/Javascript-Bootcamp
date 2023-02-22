const poll = {
  question: 'What is your favourite programming language?',
  options: ['JavaScript', 'Python', 'Rust', 'C++'],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    if (answer >= 0 && answer <= 3) {
      this.answers[answer]++;
    } else {
      alert('Invalid answer! Please try again.');
    }
    this.displayResults();
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};


const testData1 = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];

poll.registerNewAnswer(); // User input: 0
poll.registerNewAnswer(); // User input: 2
poll.registerNewAnswer(); // User input: 2
poll.registerNewAnswer(); // User input: 3

poll.displayResults(); // [1, 0, 2, 1]

poll.displayResults('string'); // Poll results are 1, 0, 2, 1

poll.displayResults.call({ answers: testData1 }); // [5, 2, 3]
poll.displayResults.call({ answers: testData2 }, 'string'); // Poll results are 1, 5, 3, 9, 6, 1
