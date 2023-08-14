/*
Получить среднее арифметическое всех чётных элементов массива, стоящих на нечётных местах.

Taq orınlarda barlıq jup massiv elementleriniń ortasha arifmetik ma`nisin alın'.
*/

let arr = [], arrB = [], sum = 0;
for (let i = 0; i < 6; i++) {
  arr.push(Math.floor(Math.random() * 15));
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0 && i % 2 != 0) {
    arrB.push(arr[i]);
  }
}
for (item of arrB) {
    sum += item
}
let arvg = sum / arrB.length
