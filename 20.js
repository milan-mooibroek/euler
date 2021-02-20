

const factoralDigit = 100;
let exponent = 1n;

for (let i = 1; i <= factoralDigit; i++) {
    exponent *= BigInt(i);
}

const factoralDigitSum = exponent.toString().split('').reduce((sum, number) => sum + parseInt(number), 0);

console.log(`the factoral digit sum of ${factoralDigit} is ${factoralDigitSum}`);