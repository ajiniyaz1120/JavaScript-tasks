// В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.
// Tómendegi kod setTimeout shaqırıwın joybarlastıradı hám keyin orınlaw ushın 100 millisekund den artıq waqtın alatuǵın quramalı esap -kitaptı ámelge asıradı.

// Когда будет выполнена запланированная функция?
// Joybarlastırılǵan funkciya qashan tawsıladı?

// После цикла.
// Перед циклом.
// В начале цикла.
// Что покажет console.log?

// Loopdan keyin.
 // Loopdan aldın.
 // Loop basında.
 // console. log neni kórsetedi?
 
let i = 0;

setTimeout(() => console.log(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
}