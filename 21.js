const amicableNumbers = 10000;
let amicableNumbersSum = 0;

for (i = 1; i <= amicableNumbers; i++) {
    let firstDivideableSum = 0;
    let secondDivideableSum = 0;
    for (f = 1; f < i; f++) {
        if(i % f === 0) {
            firstDivideableSum += f;
        }
    }
    for (s = 1; s < firstDivideableSum; s++) {
        if(firstDivideableSum % s === 0) {
            secondDivideableSum += s;
        }
    }
    if(i === secondDivideableSum && i !== firstDivideableSum) {
        amicableNumbersSum += firstDivideableSum
    }
}

console.log(`The amicable number sum till ${amicableNumbers} is ${amicableNumbersSum}`);