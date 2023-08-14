// Выведите на экран количество секунд, которое осталось до конца дня.

let now = new Date();
let theEnd = new Date(2023,6,23) 

let result = Math.floor(((theEnd.getTime() - now.getTime()) / 1000))
console.log(result);