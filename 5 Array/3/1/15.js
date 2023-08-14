// Заполнить массив из 12 элементов случайными числами в интервале [-12..12] и выполнить циклический сдвиг ВПРАВО на 4 элемента.

let array = [];

for (let i = 0; i < 12; i++) {
    array.push(Math.floor(Math.random()*24-12));   
}
console.log(array);

let array2 = [];
let rightBy4 = [];

for (let j = 0; j < 4; j++) {
    rightBy4 = array.splice(array.length-1);
    console.log(rightBy4);
    array2 = array.unshift(rightBy4[0]);    
}
console.log(array);