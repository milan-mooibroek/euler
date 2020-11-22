let finished = false;
let startingNumber = 1;

while(!finished) {
    if( startingNumber % 1 === 0 &&
        startingNumber % 2 === 0 &&
        startingNumber % 3 === 0 &&
        startingNumber % 4 === 0 &&
        startingNumber % 5 === 0 &&
        startingNumber % 6 === 0 &&
        startingNumber % 7 === 0 &&
        startingNumber % 8 === 0 &&
        startingNumber % 9 === 0 &&
        startingNumber % 10 === 0 &&
        startingNumber % 11 === 0 &&
        startingNumber % 12 === 0 &&
        startingNumber % 13 === 0 &&
        startingNumber % 14 === 0 &&
        startingNumber % 15 === 0 &&
        startingNumber % 16 === 0 &&
        startingNumber % 17 === 0 &&
        startingNumber % 18 === 0 &&
        startingNumber % 19 === 0 &&
        startingNumber % 20 === 0) {
            finished = true;
            console.log(`first number devidable from 1/20 is ${startingNumber}.`);
        }
    startingNumber++;
}