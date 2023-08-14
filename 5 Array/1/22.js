/*
В массиве найти минимальное значение среди элементов с нечетными индексами.

massivte taq indeksli elementler arasındaǵı minimal ma'nisdi tabıń.
*/

let arr = []
for (let i = 0; i < 6; i++) {
    arr.push(Math.floor(Math.random()*10))    
}
console.log(arr);

let result = 0
let min = arr[0]
for (item of arr) {
    if (item<min && item % 2 != 0) {
        min=item
    }
}
console.log(min);   
// for (let i = 0; i < arr.length; i++) {
//     if (  arr[i] % 2 != 0  && 0 < arr[i] ) {
//         result = arr[i]
//     }
// }
// console.log(result);     