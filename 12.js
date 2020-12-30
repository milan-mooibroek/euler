let counter = 1;
let finished = false;
const divisions = 500;
while(!finished) {
    let triangleNumber = 0;
    let divisionCounter = 0;
    for (let i = 1; i <= counter; i++) {
        triangleNumber += i;
    }
    for (let y = 1; y <= triangleNumber; y++) {
        if(triangleNumber % y === 0) {
            divisionCounter++;
        }
    }
    if(divisionCounter === divisions) {
        console.log(`The first by ${divisions} times divisible triangular number is ${triangleNumber}`);
        finished = true;
    }
    counter++;
}