// Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014)

// Ámeldegi sáne-waqtın '12:59 :59 31/12/2014' formatında kórsetiń. Bul mashqalanı sheshiw ushın bir nomerden ibarat kún hám aylar aldına 0 qosılatuǵın funkciyanı jazıń (1. 9. 2014 ten 01. 09. 2014 ni quraydı )

let date = new Date;
let takeTime = addZero(date.getHours()-12) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());
let getTheDate = addZero(date.getDate()) + '.' + addZero(date.getMonth()) + '.' + addZero(date.getFullYear());
function addZero (numbers){
  if (numbers < 10 ) {
    return numbers = '0' + numbers
  }else{
    return numbers
  }
}

console.log(takeTime, getTheDate);
