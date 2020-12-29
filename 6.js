const exTime = require('./exection_time');

let sqaureTotal = 0;
let sqaureSum = 0;

for (let i = 1; i <= 100; i++) {
    sqaureTotal += (i * i);
    sqaureSum += i;
}

sqaureSum = sqaureSum*sqaureSum;

console.log(`De som is  ${sqaureSum} - ${sqaureTotal}. Totaal is ${sqaureSum - sqaureTotal}`);
exTime.run();