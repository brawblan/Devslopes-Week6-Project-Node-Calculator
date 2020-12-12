const prompt = require('prompt-sync')({sigint: true});

const operations = {
  '+': function(a, b) { return a + b },
  '-': function(a, b) { return a - b },
  '*': function(a, b) { return a * b },
  '/': function(a, b) { return a / b }
}

function operate() {
  let done = false;
  while (!done) {
      const add = prompt('solve a problem ');
      let answer = add.split(' ');
    if (answer.length === 3) {
      let a = parseFloat(answer[0]);
      let b = parseFloat(answer[2]);          
      console.log(operations[answer[1]](a, b));
      done = true;
    } else {
      console.log(`Put a space between the numbers and operation and try again. `);
    }
  }
}

operate();