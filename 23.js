const max = 28123
let startAb0 = 0
let startAb1 = 0
let sum = 0;
const abbNumbers = [];
const Pair = (abArray,  target) => abArray.some(x => abArray.includes(target - x));
const AbNumberMaker = numberToReach => [...Array(numberToReach).keys()].slice(1).reduce((sum, i) => numberToReach % i === 0 ? sum + i : sum, 0) > numberToReach;


//can reduce to look more clean 
for (let x = 1; x < max; x++) {
    if(AbNumberMaker(x)) {
        abbNumbers.push(x);
    }
}

for (let x = 1; x < max; x++) {
    if(!Pair(abbNumbers, x)) {
        sum += x;
    }
}

//runtime is slow
 console.log(`the total sum is:${sum}`);