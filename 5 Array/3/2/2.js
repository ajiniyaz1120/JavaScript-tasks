// Дан массив, состоящий из 12 двоичных чисел. Удалить элементы, которые встречаются более двух раз

let arr = [10, 110, 111, 11, 10 , 1, 110, 101, 1000, 1001, 1100, 1010];
let i = 0;
while (i < arr.length) {
  let j = i + 1;  
  while (j < arr.length) {
    if (arr[i] == arr[j]) {
       arr = [...arr.slice(0, j), ...arr.slice(j+1, arr.length)]
    }
    j++
  }
  i++
}
console.log(arr);