let maxSequence = 1000000;
let highestChain = 0;
let sequenceStart = '';

for (let i = 1; i <= maxSequence; i++) {
    let sequence = i;
    let chain = 0;
    while (sequence !== 1) {
        chain++;
        if(sequence % 2 === 0) {
            sequence = sequence/2;
        } else {
            sequence = sequence*3+1;
        }
        if(sequence === 1) {
            if(chain > highestChain) {
                sequenceStart = i;
                highestChain = chain;
            }
        }
    }
}

console.log(`The highest collatz sequence chain under ${maxSequence} is ${highestChain} with starting number ${sequenceStart}.`);