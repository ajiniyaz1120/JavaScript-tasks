/*
Дан одномерный массив. Найти среднее арифметическое его элементов. Вывести на экран только те элементы массива, которые больше найденного среднего арифметического.

Bir ólshemli massiv berilgen. Onıń elementleriniń ortasha arifmetik ma`nisin tabıń. Massivtiń tek tabılǵan ortasha arifmetik ma'nisnen úlken bolǵan elementlerin kórsetiń.
*/

let arr = [];
let sum = 0;
let arifmetikO = 0;
for (let i = 1; i <= 5; i++) {
  arr.push(Math.floor(Math.random() * 14) + 1);
}

for (let item of arr) {
  sum += item;
}
console.log(sum);

arifmetikO = sum / arr.length;
arifmetikO;
console.log(arr);

let arvg = 0
for (let i = 0; i < arr.length; i++) {
  if (arifmetikO < arr[i]) {
    console.log("среднее арифметическое значение: " + arr[i]);
  }
}    
