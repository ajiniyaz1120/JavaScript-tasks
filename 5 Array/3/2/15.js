// Дана матрица размера 5×10. Вывести количество столбцов, элементы
// которых монотонно убывают

let array = [
    [5,4,3,6,2,7,5,1,5,2],
    [4,5,4,5,3,8,4,2,4,5],
    [3,3,7,4,4,9,3,3,6,6],
    [2,5,8,3,5,6,2,4,7,8],
    [1,3,9,2,6,7,1,5,8,9],
];
let count = 0;
for (let i = 0; i < array[0].length; i++) {
    let monotonno = false;

    for (let j = 1; j < array.length; j++) {
        if (array[j-1][i] > array[j][i]) {
            monotonno = true;
        }else{
            monotonno = false;
            break;
        }
    }   
    if (monotonno) {
        count++;
    } 
}
console.log(`количество столбцов: ` + count);