/*
   Вычислить факториал введенного числа
*/

let number = +prompt("Введите число: ")
let n = 1
let num = String(number)

function faktorial(){
    for(let i = 1; i <= num; i++){
        n = n * i
    }
    return n
}
faktorial()
document.write(faktorial());