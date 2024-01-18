let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split());
console.log(str.split('e'));
console.log(str.split(' '));
console.log(str.split(''));
//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(str.join(''));
console.log(arr.join(''));
//3) Do split or join change the original string/array?
console.log(cargoHold.split(',').sort().join(','));

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";


let cargoHoldArray = cargoHold.split(',');

cargoHoldArray.sort();

let alphabetizedCargoHoldString = cargoHoldArray.join(',');

console.log(cargoHold);
console.log(cargoHoldArray);
console.log(alphabetizedCargoHoldString);
