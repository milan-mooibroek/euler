const powerSum = BigInt(Math.pow(2, 1000));
console.log(`the summerd op total is ${String(powerSum).split('').reduce((a, b) => parseInt(a) + parseInt(b), 0)}`);