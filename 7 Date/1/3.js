/*Выведите на экран текущий день.
Выведите на экран текущий месяц.
Выведите на экран текущий год
Выведите на экран номер текущего дня недели*/

let date = new Date;
let week = date.getDay();
let month = date.getMonth()+1;
let year = date.getFullYear();
let day = date.getDate()
document.write('текущий день: ' + day +'<br>'+'текущий месяц: ' + month + '<br>' + 'текущий год: ' + year + '<br>' + 'текущего дня недели: '+ week)