let total = 600851475143;
let primeFactors = [];

for (let i = 1; i < total; i++) {
    if(total % i === 0 ) {
        primeFactors.push(i);
        if(primeFactors.reduce((total, newFactor) => total * newFactor) === total) {
            console.log('highest prime factor:' + i);
            break;
        }
    }
}