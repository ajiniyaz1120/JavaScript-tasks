/*
Дана квадратная матрица размером nxn. Найти минимальный элемент среди элементов, расположенных ниже главной диагонали, найти максимальный элемент, среди элементов расположенных выше побочной диагонали. Найденные минимальный и максимальный элементы поменять местами и вывести их индексы.

n x n ólshemli kvadrat matrica berilgen. Tiykarǵı diaganal astında jaylasqan elementler arasınan minimal elementti tabıń, ekilemshi diaganal ústinde jaylasqan elementler arasınan maksimal elementti tabıń. Tabılǵan minimal hám maksimal elementler almastırıladı hám olardıń indeksleri shiǵarıladı.
*/

let max = 0;
let min = 9;

let arr = [
    [0,5,2,],
    [4,9,3,],
    [9,8,6,]
]

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (i < j) {
            if (arr[i][j] < min) {
                min = arr[i][j]
            }
        }   
        if (i > j) {
            if (max < arr[i][j]) {
                max = arr[i][j]
            }
        }     
    }
}

console.log(`min : ${min}`);
console.log(`max : ${max}`);