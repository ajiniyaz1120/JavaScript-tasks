/*
В одномерном массиве найти минимальный и максимальный элементы. Вычислить их разность.
Например, дан массив [3, 5,20 9, 4, 2, 6]. Максимальным числом является 9, минимальным является 2. Разность составляет 9-2=7.

Bir ólshemli massivtiń minimal hám maksimal elementlerin tabıń. Olardıń parqın esaplań. Mısalı,[3, 5, 9, 4, 2, 6] massiv berilgen. Maksimal san 9, minimal 2. Parqı 9-2=7.
*/

let arr = [],
  max = 0,
  result = 0;
for (let i = 0; i < 7; i++) {
  arr.push(Math.floor(Math.random()*10+1))
}
arr
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i]
  }
} 
max
let min = arr[0]
min
for (let item of arr) {
  if (item < min) {
    min = item
  }
}
min
result = max - min
console.log('Разность: ' + result );