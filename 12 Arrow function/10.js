function numberGenerator(){
    let currentNum = 2;
    return () => currentNum *= currentNum;
}

let generation = numberGenerator();
let generation2 = numberGenerator();

console.log(generation());
console.log(generation());

console.log(generation2());
console.log(generation2());
