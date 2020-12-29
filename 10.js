const exTime = require('./exection_time');
const total = 2000000;
const firstPrime = 2;
let summedPrimes = 0;
let isPrime = true;
for (let y = firstPrime; y <= total; y++) {
    for (let i = firstPrime; i < y; i++) {
        if (y % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        summedPrimes += y;
    }
    isPrime = true;
    console.log(`${y}/${total}`);
}
console.log(`the summed primes of ${total} is ${summedPrimes}.`);
exTime.run();