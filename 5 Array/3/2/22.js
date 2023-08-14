// Дана матрица N×M, состоящая из натуральных чисел. Выбрать в строках
// самые левые наименьшие элементы и поставить их в первый столбец.

let array = [
    [2,3,1,4],
    [6,7,5,8],
    [9,8,7,6]
];

let min = 0, array2 = [];
for (let i = 0; i < array.length; i++) {
    let min = array[i][0];
    for (let j = 0; j < array[i].length; j++) {
        if (array[i][j] < min) {
            min = array[i][j];
        }        
    }
    array2.push(min);
    min
}

for (let n = 0; n < array.length; n++) {
    for (let m = 0; m < array[n].length; m++) {
        array[n][0] = array2[n]
    }    
}
console.log(array);