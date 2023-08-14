// Дан двухмерный массив 7×7. Найти сумму модулей отрицательных нечетных элементов.

let array = [];
for (let g = 0; g < 7; g++) {
    array.push([]);
    for (let k = 0; k < 7; k++) {
        array[g][k] = Math.floor(Math.random()*25-10);
    }    
}
console.log(array);

let sum = 0;
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[i][j] < 0 && array[i][j]%2 != 0) {
            sum += array[i][j];
        }        
    }    
}
console.log(sum);