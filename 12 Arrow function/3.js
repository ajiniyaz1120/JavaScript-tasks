function sum(a) {
    return (b) => a+b;
}

console.log(sum(1)(2));
console.log(sum(5)(-1));