/*
4.Пользователь вводит подряд 20 разных чисел(ввод осуществляется всех чисел только в 1 переменную),нужно посчитать 
сколько было инверсий. Пример:
   = 9 инверсий, к примеру 5 2 - это инверсия то есть то число которое стоит 
слева больше того числа которое справа.
*/

/*Paydanlaniwshi izbe-iz 20 tu'rli sanlardi kiritedi (ba'rshe sanlar tek g'ana 1 o'zgeriwshige kiritilgen), siz qansha inversiya barlig'in esaplawin'iz kerek. Misal : = 9 inversiya , misali , 5 2 inversiya , yag'niy sheptegi san on'dag'i sannan u'lkenrek.*/


let a
let x
let count = 0

for( i = 0; i <= 10; i++){
   x = a
   a = +prompt("Введите число: ")
   if( a < x ){
      count++
   }
}
alert(count)