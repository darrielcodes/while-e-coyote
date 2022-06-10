const prompt = require('prompt-sync')({sigint: true});

console.log("Enter a number:")

userNum = Number(prompt("> "));

while (userNum < 100){
    userNum = userNum * 2;
    console.log(userNum)
}