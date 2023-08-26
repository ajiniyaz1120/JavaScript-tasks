// 1) Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
// Например: 
// sum(1)(2) = 3
// sum(5)(-1) = 4

function sum(a){
    let count = 0;
    function counter(b) {
        return count = a + b;
    }
    return counter;
}

let incrementCounter = sum(5)(-1);

console.log(incrementCounter);

// function counter(a) {
//     let count = 0;
//     function creat() {
//         count++;
//         console.log(count);
//     }
//     return creat;
// }
// let counterr = counter();
// counterr()//1
// counterr()//2
// counterr()//3