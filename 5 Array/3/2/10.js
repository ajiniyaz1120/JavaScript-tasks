// В матрице А(4-строки,3-столбца) поменять местами наибольшие элементы в первом и третьем столбцах.

let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];
let max = 0,
  max2 = 0,
  maxIndex = 0,
  maxIndex2 = 0;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[i][0] > max) {
      max = array[i][j];
      maxIndex = i;
    }
    if (array[i][2] > max2) {
      max2 = array[i][j];
      maxIndex2 = i;
    }
  }
}
let temp = array[maxIndex][0];
array[maxIndex][0] = array[maxIndex2][2];
array[maxIndex2][2] = temp;
console.log(array);