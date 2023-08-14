// Задан массив чисел в двоичной системе счисления. Поменять местами
// максимальный и минимальный элементы.

let array = [10, 1011, 101, 111, 1100, 100, 1000,];
            //2, 11, 5, 7, 12, 4, 8,

console.log("Данный массив : "); 
console.log(array);

let min = 1000, 
    max = 0,
    minIndex = 0,
    maxIndex = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];  // максимальный элемент
        maxIndex = i;
    }
    if (array[i] < min) {
        min = array[i]; // минимальный элемент
        minIndex = i;
    }    
}

array[minIndex] = max; 
array[maxIndex] = min;

console.log("\n результат : ");
console.log(array);