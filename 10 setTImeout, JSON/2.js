// В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.
// Когда будет выполнена запланированная функция?
// После цикла.
// Перед циклом.
// В начале цикла.
// Что покажет alert? (Почему?)

// Tómendegi kod setTimeout shaqırıwın joybarlastiradi hám keyin orınlaw ushın 100 ms den artıq waqtın alatuǵın quramalı esap -kitaptı ámelge asıradı.
// Joybarlastırılǵan funksiya qashan atqarıladı?
// Loopdan keyin.
// Loopdan aldın.
// Loop basında.
//  Eskertiw neni kórsetedi? (Ne ushın?)

setTimeout(() => {
  console.log("Выполнено через setTimeout");
}, 0);

let startTime = 0;
while (startTime < 200000000) {
  startTime++;
}

console.log("Завершено сложное вычисление");
