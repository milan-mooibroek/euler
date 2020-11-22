let startNumberHigh = 999;
let startNumberLow = 100;
let stopForeach = false;

for (let i = 999; i >= 100; i--) {
    console.log(i);
    for (let y = 999; y >= 100; y--) {
        let sumString = String(i*y);
        console.log(`current is ${sumString}. with ${i} x ${y}`);
        if(sumString.length % 2 === 0 || true) {
            let partOne = sumString.substr(0, (sumString.length / 2));
            let partTwo = sumString.substr((sumString.length / 2), (sumString.length / 2));
            if(partOne === partTwo.split('').reverse().join('')) {
                console.log(`palindrom is ${sumString}. with ${i} x ${y}`);
                stopForeach = true;
                break;
            }
        }
    }
    if(stopForeach === true) {
        break;
    }
}