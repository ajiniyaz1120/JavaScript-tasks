// Даны две квадратных таблицы чисел. Требуется построить третью, каждый элемент которой равен сумме элементов, стоящих на том же месте
// в 1-й и 2-й таблицах.

let array = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let arrayB = [
    [10,11,12],
    [13,14,15],
    [16,17,18]
];

let arrayD = [];

for (let i = 0; i < array.length; i++) {
    arrayD.push([]);
    for (let j = 0; j < arrayB.length; j++) {
        arrayD[i].push(array[i][j] + arrayB[i][j]); 
    }    
}
console.log(arrayD);