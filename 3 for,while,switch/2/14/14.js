/*
Найти наибольший общий делитель двух заданных натуральных чисел, используя алгоритм Евклида

Evklid algoritmınan paydalanıp, berilgen eki natural sannıń eń úlken ulıwma bóliwshisin tabıń.
*/

// let a = 50
// let b = 130

// while(a != 0 && b != 0){
//     if(a>b){
//         a=a%b       //38
//     }
//     else{
//         b=b%a       //6
//     }
// }
// console.log(a+b);

let a = +prompt('Введите число a: ')                        //120
let b = +prompt('Введите число b: ')                        //50
do{
    if (a>b) {                                              //120 > 50
        a=a-b                                               //120 - 50 = 60
    }
    else{
        b=b-a                                               
        console.log(b);
    }
}while(a != b)                                              // 60 = 50

alert('наибольший общий делитель ' + a)