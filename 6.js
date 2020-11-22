let sqaureTotal = 0;
let sqaureSum = 0;

for (let i = 1; i <= 100; i++) {
    sqaureTotal += (i * i);
    sqaureSum += i; 
    let tempSqaureSum = sqaureSum*sqaureSum;
    if(sqaureTotal - tempSqaureSum < 0) {
        sqaureTotal -= (i * i); 
        sqaureSum -= i;
        console.log(`De som is ${sqaureTotal} -  ${sqaureSum}. Totaal is ${sqaureTotal - sqaureSum}`);
        break;
    }
}

sqaureSum *= sqaureSum;
const total = sqaureTotal - sqaureSum;

