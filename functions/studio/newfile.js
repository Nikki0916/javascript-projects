function makeLine(num) {
    let newLine = "";
    for (let i = 0; i < num; i++) {
        newLine = "#" + newLine;
    }
    return newLine;
}

// console.log(makeLine(5));
// output: #####

function makeSquare(size) {
    let square = "";
    for (let i = 0; i < size; i++) {
        square = makeLine(size) + square;
    }
    return square;
}

// console.log(makeSquare(5));
// output: #########################

functin makeRectangle(width,height) {
let rectangle = ''
for (let = 0; i < height; i++) {
    rectangle += (makeLine(width) + '\n');

}
return rectangle
}
console.log(makeRectangle(4,6));


