// Initialize Variables below
let date = 	"Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = "true";

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount >= 7) {
<<<<<<< HEAD
    console.log ("Astronauts:" + astronautCount)
   }
// add logic below to verify all astronauts are ready
if ( astronautStatus = "ready") {
    console.log ("Astronauts are ready")
} else if (astronautCount <= 7) 
console.log ("Too many astronauts") 
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <= 850000) {
    console.log ("Weight is within limit")
   }
=======
  console.log ("Astronauts are all present")

}
// add logic below to verify all astronauts are ready
if ( astronautStatus = "ready") {
console.log ("Astronauts are ready")
} else if (astronautCount <= 7) 
console.log ("Too many astronauts") 

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <= 850000) {
  console.log ("Weight is within limit")
 }
>>>>>>> dba756cdd3f490625578ebf4a85b76abe035f877
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if ( fuelTempCelsius >= minimumFuelTemp && fuelTempCelsius <= maximumFuelTemp ) {
    console.log("Temp Okay");
  }
// add logic below to verify the fuel level is at 100%
if ( fuelLevel === "100%") {
    console.log("Fuel is full");
  }
// add logic below to verify the weather status is clear
if ( weatherStatus === "clear") {
    console.log("Weather is clear");
  }
// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftOff === "true"){
<<<<<<< HEAD
    console.log("Cleared to launch")
}
else if (preparedForLiftOff === "false"){
    console.log("System failed")
}   
=======
 console.log("Cleared to launch")
}
>>>>>>> dba756cdd3f490625578ebf4a85b76abe035f877
