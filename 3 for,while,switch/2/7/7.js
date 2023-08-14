/*
Напечатать минимальное число, большее 200, которое нацело делится на 17.
*/

/* 
17 ga teng bo‘linadigan 200 dan katta minimal sonni chop eting.
*/

let number = +prompt("Введите число больше 200 : ")

while(true){
    number++
    if(number % 17 == 0) break;
}
document.write("Напечатать минимальное число, большее 200, которое нацело делится на 17: " + number)
