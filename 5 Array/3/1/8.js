// Требуется заполнить массив числами, которые вводит пользователь, и вычислить их сумму. Если пользователь вводит ноль или превышен размер массива, то запросы на ввод должны прекратиться.

let num;
let sum = 0;
let array = [];
for (let i = 0; i < 5; i++) {
    num = +prompt("введите число: ") 
    if (num == null) break;
    array.push(num);
    sum += num;
}
alert("твой массив: " + array + " | " + "сумма элементов: " + sum)