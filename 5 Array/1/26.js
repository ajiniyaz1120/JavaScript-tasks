/*
Даны две квадратных таблицы чисел. Требуется построить третью, каждый элемент которой равен сумме элементов, стоящих на том же месте
в 1-й и 2-й таблицах.

Eki kvadrat nomerler kestesi berilgen. Hár bir element birdey orındaǵı elementlerdiń jıyındısına teń bolǵan úshinshisin qurıw kerek 1 hám 2-kestelerde.
*/

let array1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let array2 = [
    [10,11,12],
    [13,14,15],
    [16,17,18]
]
let array3 = [];
for (let i = 0; i < array1.length; i++) {
    array3.push([])
    for (let j = 0; j < array2.length; j++) {
        array3[i].push(array1[i][j] + array2[i][j])        
    }
}
console.log(array3);