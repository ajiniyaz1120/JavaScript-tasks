/*
Дан прямоугольник с размерами a x b. От него отрезают квадраты максимального размера, пока это возможно. Затем от оставшегося прямоугольника вновь отрезают квадраты максимально возможного размера и т. д. На какие квадраты и в каком их количестве будет разрезан исходный прямоугольник?
*/

let a = +prompt("Введите число a: ")
let b = +prompt("Введите число b: ")
let count , remnant

do{
    if(a>b){
        count = parseInt(a/b)
        remnant = a%b 
        a = remnant
        document.write("Количество квадратов со стороной " + b + " равно на " + count + "<br>")
    }
    else{
        count = parseInt(b/a)
        remnant = b%a 
        b = remnant
        document.write("Количество квадратов со стороной " + a + " равно на " + count + "<br>")
    }
}while(remnant != 0)
