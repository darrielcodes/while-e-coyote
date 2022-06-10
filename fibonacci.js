// need to create min two variables, cut off at 9th number
// modulus 10%2

const prompt = require('prompt-sync')({sigint: true});

console.log("Enter a value for 'n:" );

n = Number(prompt("> "));
let counter = 1; // keeps track of amount of times loop runs, accnts for first 0
let x = 0;
let y = 1;
let sum = 0;

console.log(x)
while (counter < n){
    
    console.log(y)
    sum = x + y;
    x = y;
    y = sum;

    counter++
}
