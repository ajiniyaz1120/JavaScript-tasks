/*
Составьте программу, которая выводит на экран делители каждого числа от 1 до 9.
*/

let numberOne = +prompt('Введите число:')
function result (number){
    let one = 1
    while(one < 10){
        if(number % one === 0)document.write( one + "<br>" );
        one++
    }
}
result (numberOne)

let numberTwo = 8
function numResult (num){
    for(let i=1; i<10;i++){
        if(num % i === 0)console.log(i);
    }
}
numResult (numberTwo)