/*
 Перепишите код с использованием одной конструкции switch:

const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}
*/
 
let number = +prompt("Введите число: ", "1")

function result () {
  switch(true){
    case(number === 0):
      document.write("Вы ввели число 0");
      break;
    case(number === 1):
      document.write("Вы ввели число 1");
      break;
    case(number === 2):
      document.write("Вы ввели число 2");
      break;
    case(number === 3):
      document.write("Вы ввели число 1");
      break;
  }
}
result()