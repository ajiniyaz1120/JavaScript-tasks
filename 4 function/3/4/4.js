/*
 Функция ggg принимает 2 параметра: анонимную функцию, которая возвращает 3 и анонимную 
функцию, которая возвращает 4. Верните результатом функции ggg сумму 3 и 4.

Ggg funksiyası 2 parametrdi aladı : 3 ti qaytaratuǵın anonim funksiya hám anonim.
 4 qaytaratuǵın funksiya.ggg nátiyjesi retinde 3 hám 4 dıń jıyındısın qaytarıń.
*/

// let ggg = function (a,b){return a() + b()}
// let four = function (){return 4}
// let three = function (){return 3}
// console.log(ggg(four,three));

function ddd(p, q) {return p() + q();}

function b() {return 3;}

function d() {return 4;}

console.log(ddd(b, d));
