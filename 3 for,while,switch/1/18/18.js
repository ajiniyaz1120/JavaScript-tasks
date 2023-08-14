/*Составьте программу, которая принимает с клавиатуры числа, пока не будет введено значение 99. 
Программа должна подсчитать, сколько чисел было введено с клавиатуры (не считая значения 99) 
и вывести эту информацию на экран. */

/* 99 ma'nisi kiritilgenge shekem klaviaturadan sanlardi qabillawshi da'stu'r jazin'. Da'stu'r klaviaturadan qansha san kiritilgenin esaplawi kerek (99 ma'nisin esapqa almag'anda) ha'm usi mag'liwmatti ekranda ko'rsetin'. */


let num
let count = 0

while (true) {
    num = +prompt("Введите число: ")
    if(num === 99){
        alert("Введено чисел: " + count)
        break
    }
    count++
    
}

// do{
//     num = +prompt("Введите число: ")
//     count++

// }while(num =! 99);
// alert("Введите чисел: " + count)


