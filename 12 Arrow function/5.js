let arr = [1,2,3,4,5,6,7];

console.log(arr.filter(inBetween(3,6)));
console.log(arr.filter(inArray([1,2,6])));

function inBetween(a,b){
    return (value) => a < value && value < b;
}

function inArray(arr){
    return (value) => arr.indexOf(value) != -1
}