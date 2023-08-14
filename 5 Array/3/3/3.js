// Как бы вы могли использовать Math.max для нахождения максимального элемента в массиве?

function maxArr(array) {
    return Math.max.apply(null,array)
}
let array = [5,6,3,25,9,7];
let max = maxArr(array)

console.log(max);