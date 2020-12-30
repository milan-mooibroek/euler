const powerSum = BigInt(Math.pow(2, 1000)).toString();
let summedTotal = 0;

for (let i = 0; i <= (powerSum.length - 1); i++) {
    summedTotal += parseInt(powerSum.charAt(i));
}

console.log(`the summerd op total is ${summedTotal}.`);