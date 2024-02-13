// Code your selectRandomEntry function here:
function selectRandomEntry(arr) {
  let index = Math.floor(Math.random()*arr.length);
  // use floor to make it an integer
  return arr.splice(index,1)[0];
}


// Code your buildCrewArray function here:

let idNumbers = [291, 414, 503, 599, 796, 890];
let selectedCrew = [];

selectedCrew.push(selectRandomEntry(idNumbers));
selectedCrew.push(selectRandomEntry(idNumbers));
selectedCrew.push(selectRandomEntry(idNumbers));

console.log(selectedCrew);

// function buildCrewArray(selectedIDs, candidates) {
//   let crew = [];
//   for (let candidate of candidates) {
//     if (selectedIDs.includes(candidate.astronautID)) {
//       crew.push(candidate);
//     }
//   }
//   return crew;
// }




// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

/** PART 1 - SELECT THE CREW **/

// Code your selectRandomEntry function here:
function selectRandomEntry(arr) {
	let index = Math.floor(Math.random() * arr.length);
	return arr[index];
}

// Here are all 6 id numbers to be selected randomly
let idNumbers = [291, 414, 503, 599, 796, 890];

// Fill a new array with 3 unique ID numbers selected randomly
let crewIds = [];

while (crewIds.length < 3) {
	let randomId = selectRandomEntry(idNumbers);
	if (!crewIds.includes(randomId)) {
		crewIds.push(randomId);
	}
}

// Code your buildCrewArray function here:
function buildCrewArray(candidates, selectedIds) {
	let selectedCrew = [];
	for (let i=0; i < candidates.length; i++) {
		if (selectedIds.includes(candidates[i].astronautID)) {
			selectedCrew.push(candidates[i]);
		}
	}
	return selectedCrew;
}

// Here is an array containing all 6 candidates above
let animals = [candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];

// Create a new crew array by calling your buildCrewArray function
let crew = buildCrewArray(animals, crewIds);

// Code your template literal and console.log statements:
