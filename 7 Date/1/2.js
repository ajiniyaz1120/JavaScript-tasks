// 2) Выведите на экран текущий месяц словом, по-русски.

let date = new Date();
let month = date.getMonth();
switch (month) {
  case 0:
    console.log('Январь');
    break;
  case 1:
    console.log('февраль');
    break;
  case 2:
    console.log('март');
    break;
  case 3:
    console.log('апрель');
    break;
  case 4:
    console.log('май');
    break;
  case 5:
    console.log('июнь');
    break;
  case 6:
    console.log('июль');
    break;
  case 7:
    console.log('август');
    break;
  case 8:
    console.log('сентябрь');
    break;
  case 9:
    console.log('октябрь');
    break;
  case 10:
    console.log('ноябрь');
    break;
  case 11:
    console.log('декабрь');
    break;
};
