let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};


// After you have created the other object literals, add the astronautID property to each one.
let crew = [superChimpOne, salamander, superChimpTwo, dog, segmentedMicroAnimal];

for (let i = 0; i < crew.length; i++) {
   crew[i].astronautID = i + 1;
}
// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!

