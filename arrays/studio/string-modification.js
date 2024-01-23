const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let answer = str.slice(3).concat(str.slice(0,3))
console.log(answer)
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`Response ${answer}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let quantity = input.question('please input letters to move:')
answer =  str.slice(quantity).concat(str.slice(0,quantity))
console.log(answer)
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (quantity < 0) {
    console.log(
        `Part 3 :due to input being less then the string length you get the default answer: ${answer}`
        );
    }
        else if (quantity > str.length) {
            console.log(
            `part 3 error due to the input being lrger then the length`
            );

        }


console.log(answer);