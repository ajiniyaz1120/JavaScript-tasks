/*
 4. Дано натуральное число. Определить:
а) количество цифр в нем;
б) сумму его цифр;
в) произведение его цифр;
г) среднее арифметическое его цифр;
д) сумму квадратов его цифр;
е) сумму кубов его цифр;
ж) его первую цифру;
з) сумму его первой и последней цифр. 
*/

/* 
количество цифр:
сумма цифр:
произведение цифр:
среднее арифметическое цифр:
сумму квадратов цифр:
сумму кубов цифр:
первый цифр:
сумму первых и последных цифр: 
*/

// number[number.length-1]

let number = prompt("Введите число: ")
let numberOfdigits = String(number).length 
let sumOfdigits = 0
let productOfdigits = 1
let arithmeticMeanOfDigits = 0
for (let i = 0 ; i < number.length ; i++) {
    arithmeticMeanOfDigits++
    sumOfdigits = sumOfdigits + parseInt(number[i])
    productOfdigits = productOfdigits * parseInt(number[i])

}

let sumOfsquaresOfdigits = number ** 2
let sumOfcubesOfdigits = number ** 3
let firstDigit = number.toString()
let firstAndLastDigits = parseInt(firstDigit[0]) + number % 10

document.write( "количество цифр: " + numberOfdigits + "<br>");
document.write("сумма цифр: " + sumOfdigits + "<br>")
document.write("произведение цифр: " + productOfdigits + "<br>")
document.write("среднее арифметическое цифр: " + arithmeticMeanOfDigits + "<br>")
document.write("сумму квадратов цифр: " + sumOfsquaresOfdigits + "<br>")
document.write("сумму кубов цифр: " + sumOfcubesOfdigits + "<br>")
document.write("первый цифр: " + firstDigit[0] + "<br>")
document.write("сумму первых и последных цифр: " + firstAndLastDigits + "<br>")


// let n = 125
// function firstDigit(n) {
//     while (n > 10) {
//         n /= 10
//     }
//     return Math.floor(n)
// }
// console.log(firstDigit(n)) //4
