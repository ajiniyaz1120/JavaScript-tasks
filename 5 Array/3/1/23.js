// Дан одномерный массив. Найти среднее арифметическое его элементов. Вывести на экран только те элементы массива, которые больше найденного среднего арифметического.

let array = [2, 5, 6, 4, 7, 3, 9, 8];

let averageArithmetic = 0;
let arrSum = 0;
let array2 = [];

for (let i = 0; i < array.length; i++) {
    arrSum += array[i]        
}
console.log('средняя арифметика');
console.log(averageArithmetic = arrSum / array.length);

for (let j = 0; j < array.length; j++) {
    if (array[j]>averageArithmetic) {
        array2.push(array[j])
    }    
}
console.log('они больше среднего арифметического');
console.log(array2);