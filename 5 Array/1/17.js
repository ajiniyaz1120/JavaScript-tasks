/*
Все элементы массива поделить на значение наибольшего элемента этого массива.

Massivtiń barlıq elementlerin bul massivtegi eń úlken element ma`nisine bo'lıń.
*/

let arr = []
for (let i = 0; i < 6; i++) {
    arr.push(Math.floor(Math.random()*6))
}
console.log(arr);
let max = arr[0]
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    if (arr[i]>max) {
        max = arr[i]
    }
}
console.log(max);

for (let j = 0; j < arr.length; j++) {
    let result = arr[j] / max
    console.log(result);
}
