/*
Найти сумму n элементов следующего ряда чисел:
1 -0.5 0.25 -0.125 ...
Количество элементов (n) вводится с клавиатуры
*/

let number = +prompt("Введите число: ")

function result(){
    let count = 0
    let onenum = 1
    for(let i = 1; i <= number; i++){
        count += onenum
        onenum *= (-0.5)
    }
    return count
}
// result()
document.write(result());