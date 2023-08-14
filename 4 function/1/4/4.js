/*
Найти сумму и произведение цифр, введенного натурального числа. Например, если введено число 325,
 то сумма его цифр равна 10 (3+2+5), а произведение 30 (3*2*5).
*/

let number = +prompt("Введите число:")
let toAdd = 0
let increase = 1
let numS = String(number)

function result(){
    for(let i = 0; i<numS.length; i++){
        toAdd = toAdd + parseInt(numS[i])
        increase = increase * parseInt(numS[i])
    }
    document.write("увеличивать: " + toAdd + "<br>")
    document.write("операция сложения: " + increase + "<br>")
}

result()