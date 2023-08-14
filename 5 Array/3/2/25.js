// Дан массив А[3][3]. Найти строку, сумма элементов которой минимальна,
// и умножить на минимальную сумму каждый элемент матрицы.

let array = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let min = 0;
for (let i = 0; i < array.length; i++) {
    let minSum = 0;
    for (let j = 0; j < array[i].length; j++) {
        minSum += array[i][j]
    }    
    if (minSum > min) {
        min = minSum;
    }
}

for (let n = 0; n < array.length; n++) {
    for (let m = 0; m < array.length; m++) {
        array[n][m] = array[n][m] * min;        
    }    
}
console.log(array);