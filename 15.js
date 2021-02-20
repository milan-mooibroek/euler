const gridsize = 20;
const directions = 2;
const gridTravelPath = gridsize*directions;
let dividerBase = 1;

const combinations = [...Array(gridTravelPath).keys()].reduce((combinations, key) => {
    const number = (key+1);
    combinations *= number;
    return combinations;
}, 1);

for (let i = 1; i < gridTravelPath / directions + 1; i++) {
    dividerBase *= i
}

console.log(`The amount of paths in a ${gridsize}X${gridsize} is ${combinations / (dividerBase * dividerBase)}`);