// phrase = 'Code for fun'
// console.log(phrase[2])

// myStr = 'Index'
// console.log(myStr[2] === 'n');
// console.log(myStr[4] === 'x');
// console.log(myStr[6] === ' ');
// console.log(myStr[0] === 'I');

// let phrase = "JavaScript rocks!";
// console.log(phrase[phrase.length - 8]);

// cityName = "Vienna";
// stateName = "Virginia";
// location = cityName + ", " +  stateName;

// console.log(location.length);

// word = 'JavaScript';
// console.log(word.slice(4).toUpperCase());

// let language = "JavaScript";
// language.replace('J', 'Q');
// language.slice(0,5);
// console.log(language);

// language = 'JavaScript';
// console.log(language.slice(1,6));

// let org = "  The LaunchCode Foundation ";
// let trimmed = org.trim();

// console.log(trimmed);


// console.log('Launch\nCode');
// console.log('Launch/nCode');
// console.log('Launch', 'Code');
// console.log('Launch\tCode');
// console.log('Launch/tCode');

// let nonprofit = "LaunchCode";

// console.log(nonprofit.charCodeAt(0));
// console.log(nonprofit.charCodeAt(1));
// console.log(nonprofit.charCodeAt(2));
// console.log(nonprofit.charCodeAt(3));
// console.log(nonprofit.charCodeAt(4));
// console.log(nonprofit.charCodeAt(5));
// console.log(nonprofit.charCodeAt(6));
// console.log(nonprofit.charCodeAt(7));
// console.log(nonprofit.charCodeAt(8));
// console.log(nonprofit.charCodeAt(9));

// let codes = [76, 97, 117, 110, 99, 104, 67, 111, 100, 101];

// let characters = String.fromCharCode(codes[0]) + String.fromCharCode(codes[1])
//                 + String.fromCharCode(codes[2]) + String.fromCharCode(codes[3])
//                 + String.fromCharCode(codes[4]) + String.fromCharCode(codes[5])
//                 + String.fromCharCode(codes[6]) + String.fromCharCode(codes[7])
//                 + String.fromCharCode(codes[8]) + String.fromCharCode(codes[9]);

// console.log(characters);

// console.log("A message\nbroken across lines,\n\tand indented");

// console.log("The interrobang character, \u203d, combines ? and !");

// console.log("\"The dog's favorite toy is a stuffed hedgehog,\" said Chris");

// let name = "Jack";
// let currentAge = 9;

// console.log("Next year, " + name + " will be " + (currentAge + 1) + ".");

// let name = "Jack";
// let currentAge = 9;

// console.log(`Next year, ${name} will be ${currentAge + 1}.`);

// let poem = `The mind chases happiness.
// The heart creates happiness.
// The soul is happiness
// And it spreads happiness
// All-where.

// – Sri Chinmoy`;

// console.log(poem);

// let pluralNoun = "dogs";
// let name = "Blake";
// let verb = "Jump" ;
// let adjective = "Salty";
// let color = "blue";
// console.log(`JavaScript provides a ${color} collection of tools - including ${adjective} syntax and ${pluralNoun} - that allows ${name} to ${verb} ith strings.`);

// console.log(`JavaScript provides a ${color} collection of tools - including ${adjective} syntax and ${pluralNoun} - that allows ${name} to ${verb} with strings.`);

// let emptyArray = [];
// console.log(emptyArray.length);

// let programmingLanguages = ["JavaScript", "Python", "Java", "C#"];
// console.log(programmingLanguages.length);

// let grabBag = ["A string value", true, 99, 105.5];
// console.log(grabBag.length);

// let classes = ["science", "computer", "art"];
// console.log(classes.length)

// let teachers = ["Jones", "Willoughby", "Rhodes"];
// console.log(teachers.length)

// let programmingLanguages = [
//     "JavaScript", // index 0
//     "Python",     // index 1
//     "Java",       // index 2
//     "C#"          // index 3
// ];
// console.log(programmingLanguages[0]);
// console.log(programmingLanguages[3]);

// // What will happen when index 4 is requested?
// console.log(programmingLanguages[4]);

// let programmingLanguages = ["JavaScript", "Python", "Java", "C#"];
// console.log(programmingLanguages[-1]);
// console.log(programmingLanguages[100]);

// let javaScriptFrameworks = ["React", "Angular", "Ember"];
// console.log(javaScriptFrameworks);

// // Set the value of index 2 to be "Vue"
// javaScriptFrameworks[2] = "Vue";

// // Notice the value at index 2 is now "Vue"
// console.log(javaScriptFrameworks);

// let charles = ['coder', 'Tech', 47, 23, 350];
// charles.sort();
// console.log(charles);

// str = 'LaunchCode students rock!'
// str.split("");
// console.log(str)

//
// let shuttleCrews = [
//     ['Robert Gibson', 'Mark Lee', 'Mae Jemison'],
//     ['Kent Rominger', 'Ellen Ochoa', 'Bernard Harris'],
//     ['Eilen Collins', 'Winston Scott',  'Catherin Coleman']
// ];

// console.log(shuttleCrews[0][2]);
// console.log(shuttleCrews[1][1]);
// console.log(shuttleCrews[2][1]);

// let shuttleCrews = [
//     ['Robert Gibson', 'Mark Lee', 'Mae Jemison'],
//     ['Kent Rominger', 'Ellen Ochoa', 'Bernard Harris'],
//     ['Eilen Collins', 'Winston Scott',  'Catherin Coleman']
// ];

// let newCrew = ['Mark Polansky', 'Robert Curbeam', 'Joan Higginbotham'];

// // Add a new crew array to the end of shuttleCrews
// shuttleCrews.push(newCrew);
// console.log(shuttleCrews[3][2]);

// // Reverse the order of the crew at index 1
// shuttleCrews[1].reverse();
// console.log(shuttleCrews[1]);

// const classes = ["science, computer, art"];

// const teachers = ["Jones", "Willoughby", "Rhodes"];

// console.log(classes.length)
// console.log(teachers.length)

// let charles = ['coder', 'Tech', 47, 23, 350];
// charles.sort();
// console.log(charles);

let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
let selectedItems = [];

selectedItems = groceryBag.slice(2, 5).sort();
console.log(selectedItems);