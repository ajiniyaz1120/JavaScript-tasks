/*
 Найти максимальный элемент массива и его индекс (max_num   и   max_index).
*/

let max = 0;
let arr = [
  [2, 3, 4],
  [6, 7, 8],
  [10, 11, 12]
];

let indeks = '';

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i][j] >= arr[j][i]) {
      max = arr[i][j];
      indeks = i + "." + j
    }
  }
}
console.log("максимальный элемент: " + max);
console.log('индекс: ' + indeks);
///////////////////////////////////////////////////////
let max1 = 0 , indeks1 = 0
let arr2 = [2,6,3,5,8,9,]
for (let i = 0; i < arr2.length; i++) {
    if(arr2[i]>=max1){
        max1 = arr2[i]
        indeks1 = i
    }
}
console.log(max1);
console.log(indeks1);