/*Перепишите код с использованием одной конструкции switch:

const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
} */

const a = +prompt("Введите число: ")

switch (a){
    case 0:
        alert("Вы ввели число 0");
        break;
    case 1:
        alert("Вы ввели число 1");
        break;
    case 2:
        alert("Вы ввели число 2");
        break;
    case 3:
        alert("Вы ввели число 3");
        break;
    default: 
        alert("Вы не ввели число.");
}
