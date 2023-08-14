// Найти сумму тех элементов массива, которые одновременно имеют четные и отрицательные значения.
// Например, в массиве [3, -5, -2, 4, -8, 0] отрицательными четными элементами являются числа -2 и -8. Их сумма равна -10.

// let array = [3, -5, -2, 4, -8, 0];
let array = [];
for (let g = 0; g < 10; g++) {
    array.push(Math.floor(Math.random()*20-10));    
}
console.log(array);

let sumNum = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] < 0 && array[i]%2 == 0) {
        sumNum += array[i]
        console.log(array[i]);
    }    
}
console.log("Их сумма равна: " + sumNum);