//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {

    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
}

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

addScore(score) {
    this.scores.push(score);
}
average() {
    const sum = this.scores.reduce(function(total,score){
       return total + score;});
const averageScore = sum / this.scores.length;
return Math.round(averageScore * 10) / 10;

}

// average() {
//     let sum = 0 
//     for (let i = 0; i < this.scores.length; i++) {
//         sum += this.scores[i];
//     }
//     return Math.round(10 * sum / this.scores.length) / 10;
// }

status() {
    let avg = this.average();
    if (avg >= 90) {
        return "Accepted";
    } else if (avg >= 80 ) {
        return "Reserve";
    } else if (avg >= 70 ) {
        return "Probationary";
    } else {
        return "Rejected";
    }
}
}




    let bubbaBear = new CrewCandidate("Bubba Bear", 135,[88,85,90 ]);
    let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93,88,97]);
    let gladGator = new CrewCandidate("Glad Gator", 225, [75,78,62]);
    
    // console.log(bubbaBear)
    // console.log(merryMaltese)
    // console.log(gladGator)
    
    bubbaBear.addScore(83);

     console.log(merryMaltese.average)

    console.log(bubbaBear.scores);

console.log(`${bubbaBear.name} earned an average test score of ${bubbaBear.average()}% and has a status of ${bubbaBear.status()}.`);
console.log(`${merryMaltese.name} earned an average test score of ${merryMaltese.average()}% and has a status of ${merryMaltese.status()}.`);
console.log(`${gladGator.name} earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()}.`);




// // //Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.



