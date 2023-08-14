// Дана матрица размера NxM. Столбцы считать похожими, если совпадают
// множества чисел, встречающиеся в этих столбцах. Найти количество
// столбцов, похожих на последнюю.

let array = [
    [1, 3, 9, 1, 1],
    [2, 5, 7, 2, 2],
    [3, 6, 5, 3, 3],
    [4, 8, 6, 4, 4],
];

let row = 0;

for (let i = 0; i < array.length; i++) {
    let count = 0;
    let column = array[i].length
    for (let j = 0; j < array.length; j++) {
        for (let n = 0; n < array.length; n++) {
            if (array[array.length-1][i] == array[n][array.length-1]) {
                count++
            }            
        }
    }  
    if (count / Math.floor(column/2)) {
        row++
    }  
}

console.log(row);