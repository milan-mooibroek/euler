const fs = require('fs');
const aplhabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const namesFile = fs.readFileSync('22.txt', 'utf8');
const names = namesFile.replace(/['"]+/g, '').split(',').sort((a, b) => a.localeCompare(b))
let totalNameSum = 0n;
for (let i = 1; i < (names.length + 1); i++) {
    const name = names[(i - 1)].toLowerCase();
    totalNameSum += BigInt((i * name.split('').reduce((total, letter) => total + (aplhabet.indexOf(letter) + 1), 0)));
}
console.log(`the total name score for ${names.length} names is ${totalNameSum}`);