// Задан целочисленный массив. Вывести индексы тех элементов, значения
// которых больше, чем у стоящих справа от него. Определить количество
// таких чисел.

// let array = [1, 2, 3, 4, 5, 6, 7];
let array = [];
for (let j = 0; j < 7; j++) {
    array.push(Math.floor(Math.random()*10))
}
console.log(array);
let sum = 0;
let arrayIndex=0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i+1]) {
        sum++;
        console.log(`Индексы: ${i}`)
    }
}
console.log(`Число: ${sum}.`);