/*
Дан прямоугольник с размерами a x b. От него отрезают квадраты максимального размера, 
пока это возможно. Затем от оставшегося прямоугольника вновь отрезают квадраты максимально 
возможного размера и т. д. На какие квадраты и в каком их количестве будет разрезан исходный прямоугольник?
*/
let result = () => {
    let widthA = +prompt("Введите число:")
    let heigthB = +prompt("Введите число:")
    let count = 0 , numberA , numberB , remnant 
    numberA = widthA
    numberB = heigthB
    do {
        if(numberA>numberB){
            count = parseInt(numberA/numberB)
            remnant = numberA % numberB
            numberA = remnant
            document.write("Количество квадратов со стороной " + numberB + " равно на " + count + "<br>")
        }
        else{
            count = parseInt(numberB/numberA)
            remnant = numberB % numberA
            numberB = remnant
            document.write("Количество квадратов со стороной " + numberA + " равно на " + count + "<br>")
        }
    } while (remnant != 0);
}
result()