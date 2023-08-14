// Дана целочисленная матрица А[n,m]. Посчитать количество элементов
// матрицы, превосходящих среднее арифметическое значение элементов
// матрицы. Принять n=4, m=5.

let array = [
    [ 8, 1, 1, 6, 5 ],
    [ 13, 12, 12, 1, 0 ],
    [ 14, 4, 2, 1, 10 ],
    [ 7, 12, 1, 14, 0 ]
];
let summ = 0;
let array2 = [];
for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length; i++) {
        summ += array[i][j];
    }    
}
let avrg = summ / 20;

for (let g = 0; g < array.length; g++) {
    array2.push([]);
    for (let l = 0; l < array.length; l++) {
        if (array[g][l] > avrg) {
            array2[g].push(array[g][l]);
        }        
    }    
}

console.log(array2);