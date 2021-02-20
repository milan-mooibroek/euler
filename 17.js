const numberNames = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
    1000: 'thousand'
};

const oneToHundred = (i) => {
    let amount = '';
    if(i > 0 && i <= 20) {
        return numberNames[i];
    } else if(i > 20 && i < 100) {
        const tens = Math.floor(i / 10) * 10;
        amount +=  numberNames[tens];
        const single = i - tens;
        if(single > 0) {
            amount +=  numberNames[single];
        }
    }
    return amount;
}



const wordAmount = 1000;
let words = '';

for (let i = 1; i < (wordAmount+1)  ; i++) {
    let base = i;
    let useAnd = false

    if(base >= 1000 && base < 1000000) {
        const thousands = base.toString().substring(0, base.toString().length - 3);
        words += oneToHundred(thousands) + numberNames[1000];
        base -= parseInt(thousands) * 1000;
    }

    if(base >= 100 && base < 1000) {
        const thousands = base.toString().substring(0, base.toString().length - 2);
        words += oneToHundred(thousands) + numberNames[100];
        base -= parseInt(thousands) * 100;
        useAnd = true;
    }

    if(base >= 0 && base < 100) {
        if(useAnd && base > 0) {
            words+= 'and'
        }
        words += oneToHundred(base);
    }
}

console.log(`The sum of the written out words counted up to ${wordAmount} is ${words.length}`);
