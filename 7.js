const exTime = require('./exection_time');
const wantedPrimeIndex = 10001;
let currentPrimeIndex = 1;
let startPrime = primeNumber = 2;
let isPrime = true;
while (wantedPrimeIndex !== currentPrimeIndex) {
    primeNumber++;
    for (let i = startPrime; i < primeNumber; i++) {
        if (primeNumber % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        const lastPrime = primeNumber;
        currentPrimeIndex++;
        if (currentPrimeIndex === wantedPrimeIndex) {
            console.log(`prime number ${wantedPrimeIndex} is ${lastPrime}`);
        }
    }
    isPrime = true;
}
exTime.run();