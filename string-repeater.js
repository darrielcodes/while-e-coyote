const prompt = require('prompt-sync')({sigint: true});

console.log("Enter a string: ")
let str = prompt("> ")
let sum = ""

while (sum.length < 10){
    sum = str + sum
    console.log(sum)
}