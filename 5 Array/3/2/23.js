// Дана квадратная матрица N×N, состоящая из натуральных чисел. Зеркально отразить ее элементы относительно побочной диагонали. Вывести
// результат на экран.

let array = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let array2=[[0,0,0],[0,0,0],[0,0,0]];
let n = array.length;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        array2[i][j] = array[n-j-1][n-i-1];        
    }    
}
console.log(array2);