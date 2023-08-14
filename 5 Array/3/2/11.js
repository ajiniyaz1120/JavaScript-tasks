// Дан двухмерный массив 5×6. Определить среднее арифметическое каждого столбца, определить максимум и минимум каждой строки.

let array = [
  [7, 2, 3, 4, 5, 6],
  [1, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
];

let avrg;
let max = 0;
let column = 0;
for (let i = 0; i < array.length; i++) {
  let sum = 0;
  for (let j = 0; j < array.length; j++) {
    sum += array[j][i];
   }
console.log(sum);
console.log(`средняя арифметика каждого столбца : ${sum/array[0].length}`);
}

for (let i = 0; i < array.length; i++) {
    let min = 10000;
    for (let j = 0; j < array[0].length; j++) {
        if (array[i][j] > max) {
            max = array[i][j];
        }        
        if (array[i][j] < min) {
            min = array[i][j];
        }
    }
    console.log(`каждому строка минимальные числа : ${min}`);
    console.log(`каждое строка максимальная числа : ${max}`);
}

