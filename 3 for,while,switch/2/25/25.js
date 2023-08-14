// /*
// Дано натуральное число. Определить сумму m его последних цифр. Если заданное число — менее чем m-значное, то «недостающие» цифры при решении задачи не обрабатывать.

// Natural san berilgen. Onıń aqırǵı nomerleriniń m jıyındısın anıqlań. Eger berilgen nomer m-nomerden kishi bolsa, mashqalanı sheshiwde " joǵalgan" nomerlerdi qayta islemeń.
// */

let number = 123;
let m = 2;
let count = 1 , num = 0;
while( number > 0 && count <= m ){  //123>0 ha'm 1 <= 2 bolsa...
    let n = number % 10;            // qaldiqti aliw
    num += n;                       //aqirg'i san
    number = Math.floor(number/10)  //pu'tin san qiliw (son'g'i san alip taslanadi) 
    count++                         //0+1
}
console.log(`${m} aqirg'i sanlardin' jiyindisi: ${num}`);


// let array = [1,2,3,4,5,6,7,8,9]

// let arr = array.slice(array.length-3, array.length)
// console.log(arr);

// let summ = arr.reduce((acc, item)=>{
//     return acc+item
// }, 0)

// console.log(summ);





