/*Составьте программу, которая принимает с клавиатуры числа, пока их сумма остается меньше 100. 
По окончании ввода следует вывести на экран информацию о количестве введенных чисел и их сумме.*/

/* Eger olardin' jiyindisi 100 den kishi bolsa, olardi klaviaturadan qabillaytug'in da'stu'r du'zin'. Son'inda kiritilgen sanlar sanin (100 den joqari bolg'anda) ha'm olardin' jiyindisi haqqindag'i mag'liwmatlardi ko'rsetin'. */
// Введено чисел: 
// Сумма:

let num
let count = 0
let price = 0

while(true){
    num = +prompt("Введите число: ")
    count++
    price += num
    if(price >= 100 ){
        alert("Введено чисел: " + count)
        alert("Сумма: " + price)
        break;
    }

}

// do{
//     num = +prompt("Введите число: ")
//     count++
//     price += num
// }while(price >= 100 )
// alert("Введено чисел: " + count)
// alert("Сумма: " + price)


