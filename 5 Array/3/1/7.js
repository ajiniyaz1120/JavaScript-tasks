// Найти максимальный элемент массива и его индекс (max_num   и   max_index).

let array = [4, 3, 8, 4, 6, 5];
let max = 0,
  index = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
    index = i;
  }
}

console.log("максимальный элемент: " + max + " | " + "индекс: " + index);