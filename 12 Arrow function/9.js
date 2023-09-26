function counter(start){
    let value = start;
    function countInner(){
        countInner.reset = () => (start = ++value);
        return ++start;
    }
    return countInner;
}

let count1 = counter(5);

console.log(count1());
console.log(count1());
console.log(count1.reset());
console.log(count1());
console.log(count1());