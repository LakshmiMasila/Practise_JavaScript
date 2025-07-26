//Import the readline module
const readline= require('readline');

//Create interface for input and output
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout});

//Get the input from user
rl.question('Enter the first name : ', function(name){

console.log(`Hello: ${name} !`);

//Close the interface
rl.close();

});
