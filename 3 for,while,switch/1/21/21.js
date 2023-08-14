/*  Составьте программу, которая принимает с клавиатуры целые числа, пока не будут введены друг за другом два одинаковых числа. 
Программа должна вывести на экран сообщение о равенстве чисел, а также сумму этих чисел. */

/* Eki bir qiyli sanlar izbe-iz kiritgenge shekem klaviyaturadan ha'mme sanlardi qabillawshi da'stu'r du'zin'. Da'stu'r sanlardin' ten'ligi, sonin' menen usi sanlardin' jiyindisi haqqinda xabardi ko'rsetiwi kerek. */

let num
let number
let price = 0

while(true){
    number = num
    num = +prompt("Введите число: ")
    price += num
    console.log(num++);
    if(num === number){
        alert("Числы равны!")
        alert("Сумма: " + price)
        break;
    }
}