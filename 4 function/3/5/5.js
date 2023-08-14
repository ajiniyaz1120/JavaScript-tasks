/*
Дана функция ggg. Она требует первым параметром число, вторым функцию, которая возводит 
в квадрат, а третьим параметром функцию, которая возводит в куб. Эти функции есть как Function Declaration - kvadrat,
 kub. Пусть функция ggg вернет сумму квадрата и куба числа

Ggg funkciyası berilgen. Birinshi parametr nomer bolıwın, ekinshisi bolsa kóteriwshi funkciyanı talap etedi
kvadratqa teń, úshinshi parametr bolsa kub bolǵan funksiya bolıp tabıladı. Bul funkciyalar Funkciya deklaratsiyası retinde ámeldegi - kvadrat,
kub. Ggg funkciyası sannıń kvadratı hám kubining jıyındısın qaytarsin
*/

function ggg(a, b, c) {
  return b(a) + " " + c(a);
}
function result(a) {
  return a ** 2;
}
function square(a) {
  return a ** 3;
}
console.log(ggg(5, result, square));
