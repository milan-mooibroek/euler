let total = 0;
let divederOne = 3;
let divederTwo = 5;

for (let i = 1; i < 1000; i++) {
    if(i % divederOne === 0  || i  % divederTwo === 0) {
        total += i;
    }
}
  
console.log(total);