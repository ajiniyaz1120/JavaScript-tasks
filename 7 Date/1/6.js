// Выведите на экран текущий день недели (словом, по-русски). Создайте для этого вспомогательную функцию showDay, которая параметром принимает число, а возвращает день недели по-русски.

// Háptediń ámeldegi kúnin kórsetiw (bir sóz menen, orıs tilinde). Onıń ushın nomerdi parametr retinde qabıl etetuǵın hám orıs tilinde hápteniń kúnin qaytaratuǵın showDay járdemshi funksiyasın jaratıń.

let date = new Date();

function showDay(dayNum) {
  let week = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  return week[dayNum]
};

let day = showDay(date.getDay());
console.log(day);