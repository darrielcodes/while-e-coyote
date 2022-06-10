const prompt = require('prompt-sync')({sigint: true});

console.log("Enter some numbers (type 'done' when complete): ");
let num = (prompt("> "));
let sum = 0;


while (num !== "done") {
        sum = sum + Number(num);
        num = prompt("> ");
    }

console.log("Your numbers equal to: " + sum);