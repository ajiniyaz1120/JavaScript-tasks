/*
 Необходимо суммировать все нечётные целые числа в диапазоне, который введёт пользователь с клавиатуры.
*/

let number1 = +prompt("Введите число мин:")
let numbet2 = +prompt("Введите число макс:")
function result (){
    let num = 0
    for(let i = number1; i <= numbet2; i++){
        if(i % 2 != 0){
            num += i
        }
    }
    document.write(num); 
}
result()