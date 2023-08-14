/*
1) С клавиатуры вводится натуральное число. Найти его наибольшую цифру.
Например, введено число 764580. Наибольшая цифра в нем 8.
*/

// let test = function(){
//     return 5
// }

// console.log(test());

// let test2 = ()=> 8

// console.log(test2());

// let y = "Hello"
// let summ = function(a,b){
//     let summa = 0
//     for(let i = a; i<=b; i++){
//         summa += i
//     }

//     return y
// }
// console.log(summ());

function result(){
    let str = '74580'
    let max = str[0]
    for (let i = 0; i < str.length; i++) {
        if(str[i] > max){
            max = str[i]
        }   
    }
    return max
}
console.log(result());

let number = +prompt("San kirit: ")
function hp() {
    let z = number
    let become = String(z)
    let str = become[0]
    for(let i = 0; i < become.length; i++){
        if(become[i]>str){
            str = become[i]
        }
    }   
    return str
}
alert(hp());

// let n = 123

// console.log(maxNum(n));

// function maxNum(n){
//     let temp , max = 0;

//     do{
//         temp = n % 10      //3 , 2 , 1
//         if(temp > max){    
//             max = temp     //3
//         }
//         n = parseInt(n/10)
//     }while(n!=0)
//     return max
// }