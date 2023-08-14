// Задан массив чисел в двоичной системе счисления. Упорядочить элементы массива по убыванию. Определить сумму чисел.

let array = [10, 1 , 11, 100, 110, 1000, 101];
let sum = 0;

array.sort(function (a, b) {
    return b - a
});

for (let value of array) {
    sum += parseInt(value, 2)
};

console.log(sum);
console.log(array);
