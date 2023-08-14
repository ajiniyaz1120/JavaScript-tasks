/*
Дан прямоугольник с размерами 425 х 131 . От него отрезают квадраты со стороной 131, пока 
это возможно. Затем от оставшегося прямоугольника вновь отрезают квадраты со стороной, равной 
425 — 131·3 = 32, и т. д. На какие квадраты и в каком их количестве будет разрезан исходный прямоугольник?
*/

let result = () => {
    let numberA = 425, numberB = 131
    let widthA , heigthB , count = 0 , resultA
    widthA = numberA 
    heigthB = numberB
    do {
        if (numberA>numberB){
            count = parseInt(numberA/numberB)
            resultA = numberA % numberB
            numberA = resultA
            document.write("Количество квадратов со стороной " + numberB + " равно на " + count + "<br>")
        }else{
            count = parseInt(numberB/numberA)
            resultA = numberB % numberA
            numberB = resultA
            document.write("Количество квадратов со стороной " + numberA + " равно на " + count + "<br>")
        }
    } while (resultA != 0);
}
result()