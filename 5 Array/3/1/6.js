// Дана квадратная матрица размером nxn. Найти минимальный элемент среди элементов, расположенных ниже главной диагонали, найти максимальный элемент, среди элементов расположенных выше побочной диагонали. Найденные минимальный и максимальный элементы поменять местами и вывести их индексы.

let array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  min = 1000,
  max = 0,
  indexMin = 0,
  indexMax = 0;

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i == j) {
      if (array[i][j] < min) {
        min = array[i][j];
        min;
        indexMin = i + "," + j;
      }
    }
    if (i + j == array.length - 1) {
      if (array[i][j] > max) {
        max = array[i][j];
        max;
        indexMax = i + "," + j;
      }
    }
  }
}

for (let l = 0; l < array.length; l++) {
    for (let m = 0; m < array.length; m++) {
          if (array[l][m] == max) {
            array[l][m] = min;
          }else if (array[l][m] == min) {
            array[l][m] = max
          }
    }    
}
console.log(array);
console.log(`minimum element index: ${indexMin} | maximum element index: ${indexMax}`);
