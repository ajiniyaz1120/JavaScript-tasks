// В массиве найти минимальное значение среди элементов с нечетными индексами.

let array = [];
for (let g = 0; g < 10; g++) {
    array.push(Math.floor(Math.random()*10))    
}
console.log("Mассив:");
console.log(array);

let min = array[0];
for (let i = 0; i < array.length; i++) {
    if (i % 2 != 0 && array[i]<min) {
        min = array[i]
    }    
}
console.log('минимальное значение по нечетным индексам: ' + min);