// Найти номер и значение первого положительного элемента массива.

let array = [];
for (let g = 0; g < 6; g++) {
  array.push(Math.floor(Math.random() * 14 - 7));
}

let result;
if (array[0]<0) {
    console.log("Положительных элементов нет!");
}
else{
    console.log("Первый положительный элемент: " + array[0]);
}   