// Дан массив из 50 элементов и лежат в диапазоне от -50 до 49 включительно.  Требуется из одного массива скопировать в другой массив значения в диапазоне от -5 до 5 включительно и подсчитать их количество.

let array = [];
let array2 = [];
for (let i = 0; i < 50; i++) {
    array[i] = Math.floor(Math.random()*100-50)  
    if (array[i] > -5 && array[i] < 5) {
        array2.push(array[i])
    }  
}
console.log(array2);