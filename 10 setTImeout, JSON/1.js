// 1) Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
// Сделайте два варианта решения.
// Используя setInterval.
// Используя рекурсивный setTimeout.

// Hár sekundta 1den 5ge shekem nomerdi baspadan shıǵaratuǵın printNumbers(from,to) funksiyasın jazıń.
// Eki sheshim tayarlań.
// Setintervaldan paydalanıw.
// Rekursiv setTimeout den paydalanıw.

function printNumbers(from, to) {
    let value = from;

    let id = setTimeout(function time() {
        console.log(++value);
        if (value != to) {
            id = setTimeout(time, 1000);
        }
    },1000)
}

// printNumbers(2,5)

function printNumbersInterval(from, to) {
    let value = from;

    let id = setInterval(function time() {
        console.log(++value);
        if (value == to) {
            clearInterval(id);
        }
    }, 1000);
}

printNumbersInterval(0,5)

































// let timer = 0;

// let alarm = setInterval(() => {
//   timer++;
//   console.log(timer);
//   if (timer == 5) {
//     console.log("Wake!");
//     clearInterval(alarm)
//   }
// }, 1000);

// let alarm2 = setTimeout (function time(){
//     setTimeout(()=>{
//         timer++;
//         console.log(timer);
//         if (timer != 5) {
//             time();
//         }
//     }, 1000)
// }, 1000)