// Сформируйте массив L(I,J) с помощью датчика случайных чисел. Увеличить каждый элемент массива в 3 раза и поменяйте знак на противоположный. Массив выведите на экран в виде таблицы

let array = [];
for (let i = 0; i < 6; i++) {
      array.push(Math.floor(Math.random()*20))
}
console.log(array);

let array2 = [];
for (let item of array) {
    array2.push(item*-3)
}
console.log(array2);