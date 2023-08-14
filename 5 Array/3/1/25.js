// Получить среднее арифметическое всех чётных элементов массива, стоящих на нечётных местах.

let array = [3, 5, 6, 4, 7, 8, 2];
let arrB = [];
for (let i = 0; i < array.length; i++) {
    if (i % 2 != 0 && array[i] % 2 == 0) {
        arrB.push(array[i])
    }
}
let sum = 0;
for (let value of arrB) {
    sum += value;
}

let arvg = sum / arrB.length
console.log(arvg);