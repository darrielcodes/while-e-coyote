const prompt = require('prompt-sync')({sigint: true});

console.log("Enter two numbers:")
let x = Number(prompt("> "))
let y = Number(prompt("> "))

while (x % y !== 0){
    console.log(x)
    x = x + 1
}

console.log(x + " is divisible by " + y)