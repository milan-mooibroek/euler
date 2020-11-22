let palindrom = 0;
let palindromY = 0;
let palindromX = 0;

for (let i = 100; i <= 999; i++) {
    for (let y = 100; y <= 999; y++) {
        let sum = i*y;
        let sumString = String(sum);
        if(sumString.length % 2 === 0) {
            let partOne = sumString.substr(0, (sumString.length / 2));
            let partTwo = sumString.substr((sumString.length / 2), (sumString.length / 2));
            if(partOne === partTwo.split('').reverse().join('')) {
                if (sum > palindrom) {
                    palindrom = sum;
                    palindromY = i;
                    palindromX = y;
                }
            }
        }
    }
}

console.log(`palindrom is ${palindrom}. with ${palindromX} x ${palindromY}`);