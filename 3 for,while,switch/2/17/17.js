/*
Дан прямоугольник с размерами 425 х 131 . От него отрезают квадраты со стороной 131, пока это возможно. Затем от оставшегося прямоугольника вновь отрезают квадраты со стороной, равной 425 — 131·3 = 32, и т. д. На какие квадраты и в каком их количестве будет разрезан исходный прямоугольник?

Количество квадратов со стороной 131 равно на 3

O‘lchamlari 425 x 131 bo‘lgan to‘rtburchak berilgan. Undan yon tomoni 131 bo'lgan kvadratlar kesiladi, ammo bu mumkin. Keyin qolgan to'rtburchakdan yana tomoni 425 - 131*3 = 32 ga teng bo'lgan kvadratlar kesiladi va hokazo. Asl to'rtburchak qaysi kvadratlarga va ularning qancha sonida kesiladi?

*/
let a = +prompt()
let b = +prompt()
let numberA , numberB ,count = 0 , remnant 
numberA = a
numberB = b
do{
    if(numberA>numberB){
        count = parseInt(numberA / numberB)
        remnant = numberA % numberB
        numberA = remnant
        document.write("Количество квадратов со стороной " + numberB + " равно на " + count + "<br>");
    }else{
        count = parseInt(numberB/numberA)
        remnant = numberB % numberA
        numberB = remnant
        document.write("Количество квадратов со стороной " + numberA + " равно на " + count + "<br>");
    }
}while(remnant != 0)