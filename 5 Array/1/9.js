/*
Дан массив из 50 элементов и лежат в диапазоне от -50 до 49 включительно.  Требуется из одного массива скопировать в другой массив значения в диапазоне от -5 до 5 включительно и подсчитать их количество.

50  elementten ibarat massiv berilgen hám -50 den 49 ǵa shekem. Bir massivten basqa massivke -5 ten 5 ke shekem bolǵan bahalardı nusqalaw hám olardıń sanın esaplaw talap etiledi.
*/

let arr = [];
let arr2 = [];
let sum = 0;
for (let i = 0; i < 50; i++) {
  arr.push(Math.floor(Math.random() * 100 - 50));
  if (arr[i] <= 5 && arr[i]>=-5) {
    arr2.push(arr[i])
  }
}
console.log(arr);
console.log(arr2);
